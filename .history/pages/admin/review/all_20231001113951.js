import React, {useEffect, useState} from 'react';
import {Card, Table, Button, Modal, Form, Input} from 'antd';
import Navbar from "@/pages/admin/header/header";
import {useDispatch, useSelector} from "react-redux";
import {deleteReview, getReviews, updateReview} from "@/store/review/actions";

const {confirm} = Modal;

const AllReview = () => {

  const dispatch = useDispatch();
  const [editForm] = Form.useForm();
  const [editingRecord, setEditingRecord] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [dataTesting, setDataTesting] = useState(null)

  const reviews = useSelector(state => state.review.reviews);

  useEffect(() => {
    console.log('ok')
    dispatch(getReviews.request());
  }, [dispatch,dataTesting]);

  const columns = [
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Stars',
      dataIndex: 'stars',
      key: 'stars',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <span>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" onClick={() => showDeleteConfirm(record)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  const handleEdit = (record) => {
    setEditingRecord(record);
    setIsEditing(true);
 
    editForm.setFieldsValue(record);
  };

  const handleEditSave = () => {
    
    editForm.validateFields().then((values) => {
      const data = dispatch(updateReview.request({ id: editingRecord.id, values }));
      const date = new Date();
      setDataTesting(date.getTime());
      setIsEditing(false);
      editForm.resetFields();
    });
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    editForm.resetFields();
    const date = new Date();
    setDataTesting(date.getTime());
  };

  const handleDelete = (record) => {
    dispatch(deleteReview.request(record.id));
  };

  const showDeleteConfirm = (record) => {
    confirm({
      title: 'Are you sure you want to delete this review?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => handleDelete(record),
    });
  };


  return (
    <Navbar>
      <Card title="All Reviews">
        <Table dataSource={reviews} columns={columns}/>

        <Modal
          title="Edit Review"
          visible={isEditing}
          onOk={handleEditSave}
          onCancel={handleEditCancel}
        >
          <Form form={editForm} layout="vertical">
            <Form.Item
              name="author"
              label="Author"
              rules={[{required: true, message: 'Please enter an author'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Stars"
              name="stars"
              rules={[{ required: true, message: 'Please enter the number of stars.' }]}
            >
              <Input type="number" min={1} max={5} />
            </Form.Item>

            <Form.Item
              name="content"
              label="Content"
              rules={[{required: true, message: 'Please enter the content'}]}
            >
              <Input.TextArea rows={4}/>
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </Navbar>
  );
};

export default AllReview;
