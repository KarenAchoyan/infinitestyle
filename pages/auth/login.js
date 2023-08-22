import React, {useEffect, useReducer} from 'react';
import {Button, Form, Input, notification, Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest} from "@/store/auth/actions";
import usePreviousList from "@/utils/usePreviousList";
import {useRouter} from "next/router";

const {Title} = Typography;
const Login = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {
    isLoginRequest,
    isLoginSuccess,
    isLoginFailure,
    errorMessage
  } = useSelector((state) => state.auth)

  const [
    prevIsLoginSuccess,
    prevIsLoginFailure,
  ] = usePreviousList([isLoginSuccess,
    isLoginFailure])

  useEffect(() => {
    if (isLoginSuccess && prevIsLoginSuccess === false) {
      notification["success"]({
        duration: 7,
        description: "Welcome to our system"
      })
      router.push('/admin')
    }
  }, [isLoginSuccess, prevIsLoginSuccess])

  useEffect(() => {
    if (isLoginFailure && prevIsLoginFailure === false) {
      notification["error"]({
        duration: 7,
        description: errorMessage
      })
    }
  }, [isLoginFailure, prevIsLoginFailure, errorMessage])

  const onFinish = (values) => {
    dispatch(loginRequest(values))
  };

  return (
    <div className="login-form">
      <Title level={2} className="login-form-title">
        Login
      </Title>
      <Form
        name="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
            },
            {
              type: 'email',
              message: 'Please enter a valid email address!',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            },
          ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoginRequest}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;