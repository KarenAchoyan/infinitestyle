import {all} from "redux-saga/effects";
import authSaga from "./auth/saga";
import {categorySaga} from "@/store/category/saga";
import blogSaga from "@/store/blog/saga";
import {contactSaga} from "@/store/about/saga";
import {staffSaga} from "@/store/staff/saga";
import carSaga from "@/store/car/saga";
import reviewSaga from "@/store/review/saga";

function* rootSaga() {
  yield all([
    authSaga(),
    categorySaga(),
    blogSaga(),
    contactSaga(),
    staffSaga(),
    carSaga(),
    reviewSaga()
  ]);
}

export default rootSaga;
