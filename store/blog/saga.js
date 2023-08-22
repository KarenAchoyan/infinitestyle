import { takeLatest, put, call } from 'redux-saga/effects';
import {
  getBlogs,
  getBlog,
  addBlog,
  updateBlog,
  deleteBlog,
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
    // const blog = yield call(api.getBlog, action.payload);
    // yield put(getBlog Success(blog));
  } catch (error) {
    // yield put(getBlogFailure(error.message));
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

export default function* blogSaga() {
  yield takeLatest(getBlogs.request, handleGetBlogs);
  yield takeLatest(getBlog.request, handleGetBlog);
  yield takeLatest(addBlog.request, handleAddBlog);
  // yield takeLatest(updateBlog.request, handleUpdateBlog);
  yield takeLatest(deleteBlog.request, handleDeleteBlog);
}
