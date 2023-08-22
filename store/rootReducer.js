import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import categoryReducer from "@/store/category/reducer";
import blogReducer from "@/store/blog/reducer";
import contactReducer from "@/store/about/reducer";
import staffReducer from "@/store/staff/reducer";
import carReducer from "@/store/car/reducer";
import reviewReducer from "@/store/review/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    blog:blogReducer,
    contact:contactReducer,
    staff:staffReducer,
    car:carReducer,
    review:reviewReducer
});

export default rootReducer;
