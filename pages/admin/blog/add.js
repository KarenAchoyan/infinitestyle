import React, {useState} from 'react';
import {Form, Input, Upload, Button, message} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import Navbar from '@/pages/admin/header/header';
import {useDispatch} from 'react-redux';
import {addBlog} from '@/store/blog/actions';
import dynamic from "next/dynamic";

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const AddBlogPage = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [content, setContent] = useState('');

  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleAvatarChange = async (info) => {
    const file = info.fileList[0].originFileObj;
    if (file instanceof Blob) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (values) => {
    // Add the avatar to the form values
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('avatar', values.avatar.file);
    formData.append('content', content);


    dispatch(addBlog.request(formData));
    form.resetFields();
    setAvatarFile("")
    setAvatarPreview("")
    message.success('Blog successfully added!');
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <Navbar>
      <h1>Add Blog</h1>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Title" name="title" rules={[{required: true, message: 'Please enter the title'}]}>
          <Input placeholder="Enter the title"/>
        </Form.Item>
        <Form.Item label="Avatar" name="avatar">
          <Upload
            accept="image/*"
            showUploadList={false}
            beforeUpload={() => false} // Disable automatic upload
            fileList={avatarFile ? [avatarFile] : []}
            onChange={handleAvatarChange}
          >
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Avatar"
                style={{maxWidth: '100%', maxHeight: '200px'}}
              />
            ) : (
              <Button icon={<UploadOutlined/>}>Upload Avatar</Button>
            )}
          </Upload>
        </Form.Item>
        <Form.Item label="Content" name="content">
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            modules={{
              toolbar: {
                container: [
                  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                ],
              },
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Navbar>
  );
};

export default AddBlogPage;
