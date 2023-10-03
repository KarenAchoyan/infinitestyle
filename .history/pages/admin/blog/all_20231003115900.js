import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Upload, message } from 'antd';
import { EditOutlined, DeleteOutlined,UploadOutlined  } from '@ant-design/icons';
import Navbar from '@/pages/admin/header/header';
import { deleteBlog, getBlogs, updateBlog } from '@/store/blog/actions';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '@/configs/axiosIntance';

const AllBlogPage = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm(); // Define the form variable

  
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
    const updatedBlog = { ...selectedBlog, title: values.title };

    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('avatar', values.avatar.file);
    formData.append('content', content);

    
    console.log('Updated blog:', updatedBlog);
    dispatch(updateBlog.request(updatedBlog));

    setAvatarFile("")
    setAvatarPreview("")
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
          </Button>
        ]}
      >
        <Form
          form={form} 
          name="edit-blog-form"
          onFinish={handleEditFormSubmit}
          initialValues={{
            title: selectedBlog?.title || '',
          }}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter the title' }]}
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
    </Navbar>
  );
};

export default AllBlogPage;
