import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '@/pages/admin/header/header';
import { getContact, updateContact } from '@/store/about/actions';

const UpdateContactInfoPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);

  // Fetch contact information on component mount
  useEffect(() => {
    dispatch(getContact.request());
  }, [dispatch,form]);

  // Handle form submission
  const handleSubmit = async (values) => {
    const { id } = contact; 
    dispatch(updateContact.request({ id, values }));
    message.success('Contact information updated successfully!');
  };

  // Set form initial values with the fetched contact data
  useEffect(() => {
    if (contact) {
      form.setFieldsValue({
        email: contact.email,
        address: contact.address,
        phone: contact.phone,
        aboutMe: contact.aboutMe,
      });
    }
  }, []);

  return (
    <Navbar>
      <div>
        <h1>Update Contact Information</h1>
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please enter your address' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: 'Please enter your phone number' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="About Me"
            name="aboutMe"
            rules={[{ required: true, message: 'Please enter about us' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Navbar>
  );
};

export default UpdateContactInfoPage;
