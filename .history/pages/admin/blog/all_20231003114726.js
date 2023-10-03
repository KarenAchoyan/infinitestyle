import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Upload, message } from 'antd';
import { EditOutlined, DeleteOutlined,UploadOutlined  } from '@ant-design/icons';
import Navbar from '@/pages/admin/header/header';
import { deleteBlog, getBlogs } from '@/store/blog/actions';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '@/configs/axiosIntance';

const AllBlogPage = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs.request());
  }, [dispatch]);

  const handleDeleteBlog = () => {
    dispatch(deleteBlog.request(selectedBlog.id));
    setDeleteModalVisible(false);
  };

  const handleEditBlog = (blog) => {
    setSelectedBlog(blog);
    setEditModalVisible(true);
  };

  const handleEditFormSubmit = (values) => {
    // Update the blog entry with the edited title and avatar (you can update other fields as needed)
    const updatedBlog = { ...selectedBlog, title: values.title, avatar: values.avatar };

    // Handle the update action here (e.g., dispatch an action to update the blog in Redux state)
    console.log('Updated blog:', updatedBlog);

    // Close the edit modal
    setEditModalVisible(false);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (_, blog) => (
        <img src={`${baseUrl}/${blog.avatar}`} style={{ width: '150px' }} alt="" />
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, blog) => (
        <div>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEditBlog(blog)}
          >
            Edit
          </Button>
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => {
              setSelectedBlog(blog);
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
      <Table columns={columns} dataSource={blogs} rowKey="id" />

      <Modal
        title="Delete Blog"
        visible={isDeleteModalVisible}
        onOk={handleDeleteBlog}
        onCancel={() => setDeleteModalVisible(false)}
      >
        <p>Are you sure you want to delete this blog?</p>
      </Modal>

      {/* Edit Blog Modal */}
      <Modal
        title="Edit Blog"
        visible={isEditModalVisible}
        onOk={() => setEditModalVisible(false)}
        onCancel={() => setEditModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setEditModalVisible(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              // Submit the edit form
              form.submit();
            }}
          >
            Save
          </Button>,
        ]}
      >
        <Form
          name="edit-blog-form"
          onFinish={handleEditFormSubmit}
          initialValues={{
            title: selectedBlog?.title || '',
            avatar: selectedBlog?.avatar || '', // Provide the initial value for the avatar
          }}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter the title' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="avatar"
            label="Avatar"
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) {
                return e;
              }
              if (e && e.fileList) {
                return e.fileList;
              }
              return [];
            }}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              action={`${baseUrl}/upload`} // Replace with your upload endpoint
              onChange={({ fileList }) => {
                // Handle changes in the avatar upload
                // You can implement custom logic to upload the file to your server
              }}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </Navbar>
  );
};

export default AllBlogPage;
