import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '@/pages/admin/header/header';
import { getContact, updateContact } from '@/store/about/actions';

const UpdateContactInfoPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);

  // Fetch contact information on component mount
  useEffect(() => {
    dispatch(getContact.request());
  }, [dispatch]);

  // Handle form submission
  const handleSubmit = (values) => {
    dispatch(updateContact.request(values));
    message.success('Contact information updated successfully!');
  };

  // Set form initial values with the fetched contact data
  useEffect(() => {
    if (contact.contact) {
      form.setFieldsValue({
        email: contact.contact.email,
        address: contact.contact.address,
        phone: contact.contact.phone,
        aboutMe: contact.contact.aboutMe,
      });
    }
  }, [contact, form]);

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
