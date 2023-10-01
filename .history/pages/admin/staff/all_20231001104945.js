import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, message, Form, Space, Popconfirm, Input,Spin, Upload  } from 'antd';
import { EditOutlined, DeleteOutlined, UploadOutlined,CloseCircleOutlined } from '@ant-design/icons';
import Navbar from "@/pages/admin/header/header";
import { deleteStaff, getStaff, updateStaff } from "@/store/staff/actions";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from '@/configs/axiosIntance';

const AllStaffPage = () => {
  const staffList = useSelector((state) => state.staff.staffList);
  const [editingStaff, setEditingStaff] = useState(null);
  const [editForm] = Form.useForm();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); 
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  function clearFile(){
    setAvatarFile(null)
    setAvatarPreview("")
  }
  const fetchData = async () => {
    try {
      setIsLoading(true);
      await dispatch(getStaff.request());
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const handleDeleteStaff = (staffId) => {
    dispatch(deleteStaff.request(staffId));
    message.success('Staff deleted successfully');
  };
  function beforeUpload(file) {
    if (!isImageType(file)) {
      message.error('You can only upload JPG, JPEG, or PNG files!');
      return false;
    }
    
    if (!isFileSizeValid(file)) {
      message.error('File size must be less than 3MB!');
      return false;
    }
  
    return true;
  }
  const handleEditStaff = (staffId) => {
    const staff = staffList.find((staff) => staff.id === staffId);
    if (staff) {
      setEditingStaff(staff);
      editForm.setFieldsValue({
        fullname: staff.fullname,
      });
      setAvatarPreview(baseUrl+"/"+staff.avatar);
      setEditModalVisible(true);
    }
  };
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
  const handleUpdateStaff = (values) => {
    const formData = new FormData();
    formData.append('name', 'Andranik'); // Add other fields as needed
    formData.append('avatar', avatarFile); // Add the avatar file

    dispatch(updateStaff.request(data)); // Dispatch the updateStaff action with the new fullname
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
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => handleEditStaff(staffId)}
        >
          Edit
        </Button>
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
        <Spin spinning={isLoading}>
        <Table dataSource={staffList} columns={columns} />

        <Modal
          title="Edit Staff"
          visible={editModalVisible}
          onCancel={() => setEditModalVisible(false)}
          footer={null}
        >
          <Form form={editForm} layout="vertical" onFinish={handleUpdateStaff}>
          <Form.Item
            name="avatar"
            label="Avatar"
          >
           <div style={{position:'relative', width:'250px'}}>
           {avatarPreview && 
            <CloseCircleOutlined
            style={{ position: 'absolute', right: '0px', fontSize:'25px', color:'red', cursor: 'pointer' }}
            onClick={clearFile}
          />
            }
            <Upload
                accept=".jpg,.jpeg,.png"
                showUploadList={false}
                beforeUpload={beforeUpload}
                fileList={avatarFile ? [avatarFile] : []}
                onChange={handleAvatarChange}
                required
              >
              {avatarPreview ? (
                <div>
                  <img
                  src={avatarPreview}
                  alt="Avatar"
                  style={{maxWidth: '100%', maxHeight: '200px'}}
                />
                </div>
              ) : (
                <Button icon={<UploadOutlined/>}>Upload Avatar</Button>
              )}
            </Upload>
           </div>
          </Form.Item>

            <Form.Item
              name="fullname"
              label="Full Name"
              rules={[
                { required: true, message: 'Please enter fullname' },
                {
                  pattern: /^[A-Za-z]+$/,
                  message: 'Full Name should contain only letters',
                },
              ]}
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
        </Spin>
      </div>
    </Navbar>
  );
};

export default AllStaffPage;
