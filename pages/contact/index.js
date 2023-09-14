import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';

import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  PushpinOutlined,
} from '@ant-design/icons';
import Head from 'next/head';
import FooterBanner from '@/pages/home/footerBanner/footerBanner';

const { TextArea } = Input;

import Header from '@/pages/header/header';
import Footer from '@/pages/footer/footer';
import { addContactForm } from '@/store/blog/actions';
const Contact = () => {
  const [form] = Form.useForm(); // Create a form instance
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append('name',values.name);
    formData.append('email',values.email);
    formData.append('phone',values.phone);
    formData.append('message',values.message);

    dispatch(addContactForm.request(formData))
    message.success('Form submitted successfully');
    form.resetFields(); // Re/set the form fields
  };


  return (
    <div>
      <Head>
        <title>Infinite - Book A Limo In Los Angeles</title>
      </Head>
      <Header />
      <div
        className={'Contact'}
        style={{
          backgroundImage: `url(${'background-banner.png'})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="content-contact">
          <div className="section-contact">
            <h1>Get in touch with us</h1>
            <p className={'description-text'}>
              To make a reservation, please call us or book through our website. For any other questions or concerns,
              please don’t hesitate to reach out to us by phone or by filling out a form on the right.
            </p>
            <div className="row-icons">
              <div className="group-contact">
                <div className="icon-round">
                   <PhoneOutlined/>
                </div>
                <div>
                  <p>Have a question?</p>
                  <h5><a href='whatsapp://send?phone=+12345166'>+12345166</a></h5>
                </div>
              </div>
              <div className="group-contact">
                <div className="icon-round">
                  <MailOutlined />
                </div>
                <div>
                  <p>Contact us at</p>
                  <h5><a href='mailto:infinite@.co'>infinite@.co</a></h5>
                </div>
              </div>
              <div className="group-contact">
                <div className="icon-round">
                <PushpinOutlined />
                </div>
                <div>
                  <p>Our Address</p>
                  <h5>Address</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="section-contact">
            <div className="form-contact">
            <Form
              form={form} // Pass the form instance to the Form component
              onFinish={onFinish}
            >
                  <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your name',
                  },
                  {
                    pattern: /^[a-zA-Z ]{1,32}$/,
                    message:
                      'Please enter a valid name (max 32 characters, letters and spaces only)',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter your name*"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your email',
                  },
                  {
                    type: 'email',
                    message: 'Please enter a valid email',
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Email*"
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your phone number',
                  },
                  {
                    pattern: /^\+1\d{10}$/,
                    message:
                      'Please enter a valid US phone number (e.g., +11234567890)',
                  },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined />}
                  placeholder="+11234567890*"
                />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your message',
                  },
                  {
                    min: 10,
                    message: 'Message must be at least 10 characters',
                  },
                  {
                    max: 500,
                    message: 'Message cannot exceed 500 characters',
                  },
                ]}
              >
                <TextArea placeholder="Message*" />
              </Form.Item>
              <div className="form-group">
                <Button type="primary" htmlType="submit">
                  Send
                </Button>
              </div>
            </Form>
            </div>
          </div>
        </div>
      </div>
      <FooterBanner attachment={true} />
      <Footer />
    </div>
  );
};

export default Contact;
