import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import Navbar from '@/pages/admin/header/header';
import { useDispatch } from 'react-redux';
import { addReview } from '@/store/review/actions';

const { TextArea } = Input;

const Add = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onFinish = (values) => {
    dispatch(addReview.request(values));
    form.resetFields();
    setIsSubmitted(true);
    message.success('Review successfully added!');
  };

  return (
    <Navbar>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: 'Please enter the content.' }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Author"
          name="author"
          rules={[{ required: true, message: 'Please enter the author.' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Stars"
          name="stars"
          rules={[{ required: true, message: 'Please enter the number of stars.' }]}
        >
          <Input type="number" min={1} max={5} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        {isSubmitted && <p style={{ color: 'green' }}>Successfully added!</p>}
      </Form>
    </Navbar>
  );
};

export default Add;
