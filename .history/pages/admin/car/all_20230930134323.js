import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, message, Form, } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Navbar from '@/pages/admin/header/header';
import { deleteCar, getCars } from '@/store/car/actions';
import { useDispatch, useSelector } from 'react-redux';

const AllCarPage = () => {
  const [form] = Form.useForm();
  const cars = useSelector((state) =>state.car.cars);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [editedCar, setEditedCar] = useState(null); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars.request());
  }, [dispatch]);

  const handleDeleteCar = () => {
    dispatch(deleteCar.request(selectedCar.id));
    setDeleteModalVisible(false);
  };

  const handleEditCar = (car) => {
    // Open the edit modal and set the edited car
    setEditModalVisible(true);
    setEditedCar(car);
  };
  const handleUpdateCar = (updatedCar) => {
    // Dispatch an action to update the car
    dispatch(updateCar.request(updatedCar));
    setEditModalVisible(false);
  };
  const handleSubmit = async (values) => {
    try {
      const updatedCarData = {
        id: editedCar.id, // Ensure you include the car's ID for identification
        ...values, // Include the updated values from the form
      };
      dispatch(updateCar.request(updatedCarData));
      await updateCar.request(updatedCarData);
      setEditModalVisible(false);
      message.success('Car updated successfully');
    } catch (error) {
      console.error('Error updating car:', error);
      message.error('An error occurred while updating the car');
    }
  };
  

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Passengers Number',
      dataIndex: 'passengersNumber',
      key: 'passengersNumber',
    },
    {
      title: 'WiFi',
      dataIndex: 'wifi',
      key: 'wifi',
      render: (_, car) => <span>{car.wifi ? 'Yes' : 'No'}</span>,
    },
    {
      title: 'Bags Count',
      dataIndex: 'bagsCount',
      key: 'bagsCount',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (_, car) => <span>{car.categoryId}</span>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    // {
    //   title: 'Avatar',
    //   dataIndex: 'avatar',
    //   key: 'avatar',
    //   render: (_, car) => <img src={`../../../images/${car.avatar}`} style={{ width: '150px' }} alt="" />,
    // },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, car) => (
        <div>
          <Button type="primary" icon={<EditOutlined />} onClick={() => handleEditCar(car)}>
            Edit
          </Button>
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => {
              setSelectedCar(car);
              setDeleteModalVisible(true);
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Navbar>
      <Table columns={columns} dataSource={cars} rowKey="id" />

      <Modal
        title="Delete Car"
        visible={isDeleteModalVisible}
        onOk={handleDeleteCar}
        onCancel={() => setDeleteModalVisible(false)}
      >
        <p>Are you sure you want to delete this car?</p>
      </Modal>

       {/* Edit Modal */}
       <Modal
              title="Edit Car"
              visible={isEditModalVisible}
              onOk={() => handleUpdateCar(editedCar)}
              onCancel={() => setEditModalVisible(false)}
            >
              {editedCar && (
                <Form
                  form={form} // You can use your form instance here or create a new one
                  layout="vertical"
                  onFinish={handleSubmit} // Define your own handleSubmit function for updating the car
                  initialValues={{
                    name: editedCar.name,
                    passengersNumber: editedCar.passengersNumber,
                    wifi: editedCar.wifi,
                    bagsCount: editedCar.bagsCount,
                    categoryId: editedCar.categoryId,
                    price: editedCar.price,
                    description: editedCar.description,
                  }}
                >
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
                    {/* Add your Avatar upload logic here */}
                  </Form.Item>
                  <Form.Item label="Description" name="description">
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
          )}
        </Modal>


    </Navbar>
  );
};

export default AllCarPage;
