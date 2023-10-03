import React, {useEffect, useState} from 'react';
import {Table, Popconfirm, message} from 'antd';
import Navbar from "@/pages/admin/header/header";
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getAllContacts } from '@/store/about/actions';


const ContactPage = () => {
  const [contactData, setContactData] = useState([]);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);
  useEffect(() => {
    dispatch(getAllContacts.request());
  }, [dispatch]);


  const handleDelete = (record) => {
    deleteContactData(record.id);
  };

  const deleteContactData = (id) => {
    dispatch(deleteContactData(id))
  };

  const columns = [
    {title: 'Name', dataIndex: 'name', key: 'name'},
    {title: 'Email', dataIndex: 'email', key: 'email'},
    {title: 'Message', dataIndex: 'message', key: 'message'},
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <Popconfirm
          title="Are you sure you want to delete this contact information?"
          onConfirm={() => handleDelete(record)}
          okText="Yes"
          cancelText="No"
        >

        <Button danger type="primary" icon={<DeleteOutlined />} onClick={handleDelete}>
          Delete
        </Button>
        </Popconfirm>
      )
    }
  ];

  return (
    <div>
      <Navbar>
        <h1>Contact Page</h1>
        <Table dataSource={contacts} columns={columns}/>
      </Navbar>
    </div>
  );
};

export default ContactPage;
