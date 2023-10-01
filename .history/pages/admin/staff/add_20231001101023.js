import React, {useState} from 'react';
import {Card, Form, Input, Button, message, Upload} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {useDispatch} from 'react-redux';
import Navbar from '@/pages/admin/header/header';
import {addStaff} from "@/store/staff/actions";
import { CloseCircleOutlined } from '@ant-design/icons';

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
    console.log(values);

    if(values.avatar){
      formData.append('avatar', values.avatar.file);
    }
    // dispatch(addStaff.request(formData, handleSuccess, handleError));
    // message.success('Staff created successfully');
    // form.resetFields();
    // setAvatarPreview("")
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
  function isImageType(file) {
    return file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png';
  }
  
  function isFileSizeValid(file) {
    const maxSize = 3 * 1024 * 1024; // 3MB
    return file.size <= maxSize;
  }
  
  function beforeUpload(file) {
    if (!isImageType(file)) {
      message.error('You can only upload JPG, JPEG, or PNG files!');
      return false;
    }
    
    if (!isFileSizeValid(file)) {
      message.error('File size must be less than 3MB!');
      return false;
    }
  
    return true;
  }
  function clearFile(){
    setAvatarFile(null)
    setAvatarPreview("")
  }
  const validateFullName = (rule, value, callback) => {
    const regex = /^[A-Za-z\s]+$/; // Regular expression to allow letters and spaces
    if (!regex.test(value)) {
      callback('Please enter only letters for the fullname');
    } else {
      callback(); // Validation passed
    }
  };

  return (
    <Navbar>
      <Card title="Create Staff">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="avatar"
            label="Avatar"
          >
           <div style={{position:'relative', width:'250px'}}>
           {avatarPreview && 
            <CloseCircleOutlined
            style={{ position: 'absolute', right: '0px', fontSize:'25px', color:'red', cursor: 'pointer' }}
            onClick={clearFile}
          />
            }
            <Upload
                accept=".jpg,.jpeg,.png"
                showUploadList={false}
                beforeUpload={beforeUpload}
                fileList={avatarFile ? [avatarFile] : []}
                onChange={handleAvatarChange}
                required
              >
              {avatarPreview ? (
                <div>
                  <img
                  src={avatarPreview}
                  alt="Avatar"
                  style={{maxWidth: '100%', maxHeight: '200px'}}
                />
                </div>
              ) : (
                <Button icon={<UploadOutlined/>}>Upload Avatar</Button>
              )}
            </Upload>
           </div>
          </Form.Item>
          <Form.Item
            name="fullname"
            label="Full Name"
            rules={[
              { required: true,  message: 'Please enter the Full Name' },
              { max: 100,  message: 'Please enter short Full Name' },
              { validator: validateFullName }, // Custom validator for letters-only
            ]}
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
