import React from 'react';
import { Card, Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { addCategory } from '@/store/category/actions';
import Navbar from '@/pages/admin/header/header';

const CreateCategoryPage = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    dispatch(addCategory.request(values));
    message.success('Category created successfully');
    form.resetFields();
  };
  return (
    <Navbar>
      <Card title="Create Category">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Navbar>
  );
};

export default CreateCategoryPage;
