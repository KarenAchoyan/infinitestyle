import { takeLatest, put, call } from 'redux-saga/effects';
import {
  getBlogs,
  getBlog,
  addBlog,
  updateBlog,
  deleteBlog,
  addContactForm,
} from './actions';
import axiosInstance from "@/configs/axiosIntance";
import {addCategory, deleteCategory} from "@/store/category/actions";


function* handleGetBlogs({ payload = {} }) {
  try {
    const response = yield call(() => axiosInstance.get('/blogs', payload));
    const blogs = response.data; // Assuming the categories data is in response.data
    yield put(getBlogs.success(blogs));
  } catch (error) {
    yield put(getBlogs.failure(error.message));
  }
}

function* handleGetBlog(action) {
  try {
    const { id } = action.payload; // Extract the blog ID from the action payload
    const response = yield call(() => axiosInstance.get(`/blogs/${id}`));
    const blog = response.data; 
    yield put(getBlog.success(blog));
  } catch (error) {
    yield put(getBlog.failure(error.message));
  }
}

function* handleAddBlog(action) {
  try {
    const newBlog = yield call(() => axiosInstance.post(`/blogs`, action.payload));
    yield put(addBlog.success(newBlog));
  } catch (error) {
  }
}

function* handleDeleteBlog(action) {
  try {
    const { payload: blogId } = action; // Extract the categoryId from the payload
    yield call(() => axiosInstance.delete(`/blogs/${blogId}`));
    yield put(deleteBlog.success(blogId));
  } catch (error) {
    yield put(deleteBlog.failure(error.message));
  }
}
function* handleUpdateBlog(action) {
  try {
    const {id} = action.payload;
    const response = yield call(() => axiosInstance.put(`/blogs/${id}`,  action.payload.formData));
    yield put(updateBlog.success(response.data));
  } catch (error) {
    yield put(updateBlog.failure(error.message));
  }
}

function* handleAddContactForm(action) {
  try {
    const newBlog = yield call(() => axiosInstance.post(`/contacts`, action.payload));
    yield put(addContactForm.success(newBlog));
  } catch (error) {
  }
}


export default function* blogSaga() {
  yield takeLatest(getBlogs.request, handleGetBlogs);
  yield takeLatest(getBlog.request, handleGetBlog);
  yield takeLatest(addBlog.request, handleAddBlog);
  yield takeLatest(updateBlog.request, handleUpdateBlog);
  yield takeLatest(deleteBlog.request, handleDeleteBlog);
  yield takeLatest(addContactForm.request, handleAddContactForm);

}
