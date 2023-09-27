import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, message, Form, Space, Popconfirm, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Navbar from "@/pages/admin/header/header";
import { deleteStaff, getStaff, updateStaff } from "@/store/staff/actions";
import { useDispatch, useSelector } from "react-redux";

const AllStaffPage = () => {
  const staffList = useSelector((state) => state.staff.staffList);
  const [editingStaff, setEditingStaff] = useState(null);
  const [editForm] = Form.useForm();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStaff.request());
  }, [dispatch]);

  const handleDeleteStaff = (staffId) => {
    dispatch(deleteStaff.request(staffId));
    message.success('Staff deleted successfully');
  };

  const handleEditStaff = (staffId) => {
    const staff = staffList.find((staff) => staff.id === staffId);
    if (staff) {
      setEditingStaff(staff);
      editForm.setFieldsValue({
        fullname: staff.fullname,
      });
      setEditModalVisible(true);
    }
  };

  const handleUpdateStaff = (values) => {
    dispatch(updateStaff(editingStaff.id, values.fullname)); // Dispatch the updateStaff action with the new fullname
    setEditModalVisible(false);
    setEditingStaff(null);
    message.success('Staff updated successfully');
  };

  const columns = [
    {
      title:"ID",
      dataIndex:'id',
      key:'id'
    },
    {
      title: 'Full Name',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'action',
      render: (staffId) => (
        <Space size="small">
          <Popconfirm
            title="Are you sure you want to delete this staff member?"
            onConfirm={() => handleDeleteStaff(staffId)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger icon={<DeleteOutlined />} >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Navbar>
      <div style={{ margin: '24px' }}>
        <h1>All Staff</h1>
        <Table dataSource={staffList} columns={columns} />

        <Modal
          title="Edit Staff"
          visible={editModalVisible}
          onCancel={() => setEditModalVisible(false)}
          footer={null}
        >
          <Form form={editForm} layout="vertical" onFinish={handleUpdateStaff}>
            <Form.Item
              name="fullname"
              label="Fullname"
              rules={[{ required: true, message: 'Please enter fullname' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </Navbar>
  );
};

export default AllStaffPage;
