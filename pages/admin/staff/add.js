import React, {useState} from 'react';
import {Card, Form, Input, Button, message, Upload} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {useDispatch} from 'react-redux';
import Navbar from '@/pages/admin/header/header';
import {addStaff} from "@/store/staff/actions";

const CreateStaffPage = () => {
  const [form] = Form.useForm();
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const dispatch = useDispatch();

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
    const formData = new FormData();
    formData.append('fullname', values.fullname);
    if(values.avatar){
      formData.append('avatar', values.avatar.file);
    }
    dispatch(addStaff.request(formData, handleSuccess, handleError));
    message.success('Staff created successfully');
    form.resetFields();
    setAvatarPreview("")
  };

  const handleSuccess = () => {
    message.success('Staff created successfully');
    form.resetFields();
    setAvatarFile(null);
    setAvatarPreview(null);
  };

  const handleError = () => {
    message.error('Failed to create staff');
  };

  return (
    <Navbar>
      <Card title="Create Staff">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="avatar"
            label="Avatar"
          >
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
          <Form.Item
            name="fullname"
            label="Fullname"
            rules={[{required: true, message: 'Please enter the fullname'}]}
          >
            <Input/>
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

export default CreateStaffPage;
