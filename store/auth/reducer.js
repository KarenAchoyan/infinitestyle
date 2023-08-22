import {handleActions} from "redux-actions";
import {
    loginRequest,
    loginSuccess,
    loginFailure,
} from "./actions";

const initialState = {
    // Registration
    isRegisterRequest: false,
    isRegisterSuccess: false,
    isRegisterFailure: false,
    registerMessage: "",
    // Login registration
    isAuthenticated: false,
    isLoginRequest: false,
    isLoginSuccess: false,
    isLoginFailure: false,
    user: {},
    // Error messages
    errorMessage: "",
};

const authReducer = handleActions(
    {
        // Login
        [loginRequest]: (state) => ({
            ...state,
            isLoginRequest: true,
            isLoginSuccess: false,
            isLoginFailure: false,
        }),
        [loginSuccess]: (state, {payload}) => ({
            ...state,
            isLoginRequest: false,
            isLoginSuccess: true,
            isAuthenticated: true,
            isLoginFailure: false,
            user: payload.user,
        }),
        [loginFailure]: (state, {payload}) => ({
            ...state,
            isLoginRequest: false,
            isLoginSuccess: false,
            isLoginFailure: true,
            errorMessage: payload,
        }),
    },
    initialState
);

export default authReducer;