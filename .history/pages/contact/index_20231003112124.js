import React, { useState, useEffect,useContext } from 'react';
import { Form, Input, Button, message } from 'antd';
import {useDispatch, useSelector} from "react-redux";

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
import { getContact } from '@/store/about/actions';

const Contact = () => {
  const {contact} = useContext(ContactContext)
  const dispatch = useDispatch();
  const [form] = Form.useForm(); // Create a form instance
  const [successMessage, setSuccessMessage] = useState("")



  
  const onFinish = (values) => {
    const formData = new FormData();
    formData.append('name',values.name);
    formData.append('email',values.email);
    formData.append('phone',values.phone);
    formData.append('message',values.message);

    dispatch(addContactForm.request(formData))
    // message.success('Form submitted successfully');
    setSuccessMessage("Form submitted successfully")
    form.resetFields(); // Re/set the form fields
    setSuccessMessage("")
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
            Test Test Test Test Test Test Test Test Test Test Test Test 
            </p>
            <div className="row-icons">
              <div className="group-contact">
                <div className="icon-round">
                   <PhoneOutlined/>
                </div>
                <div>
                  <p>Have a question?</p>
                  <h5><a href={'facetime://+111111111'}></a></h5>
                </div>
              </div>
              <div className="group-contact">
                <div className="icon-round">
                  <MailOutlined />
                </div>
                <div>
                  <p>Contact us at</p>
                  <h5><a href={'mailto:info@infinitestyle.net'}>{"info@infinitestyle.net"}</a></h5>
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
                initialValue="+1"
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
                <TextArea style={{resize:'none', 'min-height':'150px', 'max-height':'150px'}} placeholder="Message*" />
                {successMessage!="" && 
                  <p style={{color:'green'}}>{ successMessage }</p>
                }
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
