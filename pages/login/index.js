import React from 'react';
import { Form, Input, Button } from 'antd';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();

  const onFinish = (values) => {
    if(values.username==='admin' && values.password==='admin123'){
        localStorage.setItem('auth', '1')
        router.push('/admin');
    }
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{ width: '300px', margin: '0 auto', marginTop: '100px' }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
