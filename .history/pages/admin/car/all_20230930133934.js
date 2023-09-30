import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Navbar from '@/pages/admin/header/header';
import { deleteCar, getCars } from '@/store/car/actions';
import { useDispatch, useSelector } from 'react-redux';

const AllCarPage = () => {
  const cars = useSelector((state) =>state.car.cars);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars.request());
  }, [dispatch]);

  const handleDeleteCar = () => {
    dispatch(deleteCar.request(selectedCar.id));
    setDeleteModalVisible(false);
  };

  const handleEditCar = (car) => {
    console.log('Edit car:', car);
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
    </Navbar>
  );
};

export default AllCarPage;
