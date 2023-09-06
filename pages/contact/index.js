import React from 'react';
import { Form, Input, Button, message } from 'antd';
import Header from '@/pages/header/header';
import Footer from '@/pages/footer/footer';
import Head from 'next/head';
import { PhoneOutlined, MailOutlined, UserOutlined, PushpinOutlined} from '@ant-design/icons';
import FooterBanner from "@/pages/home/footerBanner/footerBanner";

const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
    message.success('Form submitted successfully');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Form validation failed:', errorInfo);
  };
  return (
    <div>
      <Head>
        <title>Contact page infinite</title>
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
                  <h5>+12345166</h5>
                </div>
              </div>
              <div className="group-contact">
                <div className="icon-round">
                  <MailOutlined />
                </div>
                <div>
                  <p>Contact us at</p>
                  <h5>infinite@.co</h5>
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
              <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    variant="outlined"
                    fullWidth
                    placeholder="Enter your name"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    variant="outlined"
                    fullWidth
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: 'Please enter your phone number' },
                    {
                      pattern: /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/,
                      message: 'Please enter a valid US phone number',
                    },
                  ]}
                >
                  <Input
                    prefix={<PhoneOutlined />}
                    variant="outlined"
                    fullWidth
                    placeholder="12345678900"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea variant="outlined" fullWidth placeholder="Message" />
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
