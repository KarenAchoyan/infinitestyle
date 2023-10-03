import React, {useState, useEffect} from 'react';
import {Table, Button, Modal, message} from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import Navbar from "@/pages/admin/header/header";
import {deleteCategory, getCategories} from "@/store/category/actions";
import {useDispatch, useSelector} from "react-redux";
import {deleteBlog, getBlogs} from "@/store/blog/actions";

const AllBlogPage = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs.request());
  }, [dispatch]);

  const handleDeleteBlog = () => {
    dispatch(deleteBlog.request(selectedBlog.id));
    setDeleteModalVisible(false);
  };

  const handleEditBlog = (blog) => {
    console.log('Edit blog:', blog);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render:(_,blog)=>(
        <img src={"../../../images/"+blog.avatar} style={{width:'150px'}} alt=""/>
      )
    },
    {
      title: 'Delete',
      key: 'actions',
      render: (_, blog) => (
        <div>
          <Button
            type="danger"
            icon={<DeleteOutlined/>}
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
      <Table columns={columns} dataSource={blogs} rowKey="id"/>

      <Modal
        title="Delete Blog"
        visible={isDeleteModalVisible}
        onOk={handleDeleteBlog}
        onCancel={() => setDeleteModalVisible(false)}
      >
        <p>Are you sure you want to delete this blog?</p>
      </Modal>
    </Navbar>
  );
};

export default AllBlogPage;
