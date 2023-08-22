import React, {useEffect, useState} from 'react';
import { Form, Input, Checkbox, Select, Button, message, Upload } from 'antd';
import Navbar from '@/pages/admin/header/header';
import { useDispatch, useSelector } from 'react-redux';
import { UploadOutlined } from '@ant-design/icons';
import { addCar } from '@/store/car/actions';
import {getCategories} from "@/store/category/actions";

const { Option } = Select;

const AddCarPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const [form] = Form.useForm();
  const [description, setDescription] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  useEffect(() => {
    dispatch(getCategories.request());
  }, [dispatch]);
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
    formData.append('name', values.name);
    formData.append('passengersNumber', parseInt(values.passengersNumber));
    formData.append('wifi', values.wifi ? 1 : 0);
    formData.append('bagsCount', parseInt(values.bagsCount));
    formData.append('category_id', parseInt(values.categoryId));
    formData.append('price', parseInt(values.price));
    formData.append('description', description);
    formData.append('avatar', values.avatar.file);

    dispatch(addCar.request(formData));
    form.resetFields();
    setDescription('');
    message.success('Car successfully added!');
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <Navbar>
      <h1>Add Car</h1>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter the name' }]}
        >
          <Input placeholder="Enter the name" />
        </Form.Item>
        <Form.Item
          label="Passengers Number"
          name="passengersNumber"
          rules={[{ required: true, message: 'Please enter the number of passengers' }]}
        >
          <Input type="number" min={1} placeholder="Enter the number of passengers" />
        </Form.Item>
        <Form.Item label="WiFi" name="wifi" valuePropName="checked">
          <Checkbox>WiFi Available</Checkbox>
        </Form.Item>
        <Form.Item
          label="Bags Count"
          name="bagsCount"
          rules={[{ required: true, message: 'Please enter the number of bags' }]}
        >
          <Input type="number" min={0} placeholder="Enter the number of bags" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: 'Please select a category' }]}
        >
          <Select placeholder="Select a category">
            {categories.map((category) => (
              <Option key={category.id} value={category.id}>
                {category.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please enter the price' }]}
        >
          <Input type="number" min={0} placeholder="Enter the price" />
        </Form.Item>
        <Form.Item label="Avatar" name="avatar">
          <Upload
            accept="image/*"
            showUploadList={false}
            beforeUpload={() => false} // Disable automatic upload
            fileList={avatarFile ? [avatarFile] : []}
            onChange={handleAvatarChange}
            name={'avatar'}
          >
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Avatar"
                style={{ maxWidth: '100%', maxHeight: '200px' }}
              />
            ) : (
              <Button icon={<UploadOutlined />}>Upload Avatar</Button>
            )}
          </Upload>
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input.TextArea onChange={(e) => handleDescriptionChange(e.target.value)} />
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

export default AddCarPage;