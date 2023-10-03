import React, { useEffect, useState } from 'react';
import { Table, Popconfirm, message, Modal, Form, Input, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '@/pages/admin/header/header';
import { deleteCategory, getCategories, updateCategory } from '@/store/category/actions';

const AllCategoryPage = () => {
    const dispatch = useDispatch();

  const categories = useSelector((state) => state.category.categories);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editForm] = Form.useForm();
  const [editModalVisible, setEditModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getCategories.request());
  }, [dispatch]);

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategory.request(categoryId));
    message.success('Category deleted successfully');
  };

  const handleEditCategory = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    if (category) {
      setEditingCategory(category);
      editForm.setFieldsValue({
        name: category.name,
      });
      setEditModalVisible(true);
    }
  };

  const handleUpdateCategory = (values) => {

    const updatedCategory = { ...editingCategory, ...values };
    dispatch(updateCategory.request({ ...editingCategory, ...values }));

    setEditModalVisible(false);
    setEditingCategory(null);
    message.success('Category updated successfully');
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'action',
      render: (categoryId) => (
        <Space size="small">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEditCategory(categoryId)}
            key={`edit_${categoryId}`}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this category?"
            onConfirm={() => handleDeleteCategory(categoryId)}
            okText="Yes"
            cancelText="No"
            key={`delete_${categoryId}`}
          >
            <Button type="primary" danger icon={<DeleteOutlined />} key={`confirm_${categoryId}`}>
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
        <h1>All Categories</h1>
        <Table dataSource={categories} columns={columns} rowKey="id" />

        <Modal
          title="Edit Category"
          visible={editModalVisible}
          onCancel={() => setEditModalVisible(false)}
          footer={null}
        >
          <Form form={editForm} layout="vertical" onFinish={handleUpdateCategory}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter the name' }]}
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

export default AllCategoryPage;
