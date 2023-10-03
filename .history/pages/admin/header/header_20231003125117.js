import React, { useState, useEffect } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    TeamOutlined,
    UserAddOutlined,
    UploadOutlined,
    FormOutlined,
    CommentOutlined,
    EditOutlined,
    InfoOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Link from "next/link";
import { handleLogout } from "@/configs/axiosIntance";
import { useRouter } from 'next/router';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Navbar = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer } } = theme.useToken();
    const router = useRouter();
    const [selectedSub, setSelectedSub] = useState("");
    useEffect(()=>{
        setSelectedSub(localStorage.getItem('submenu') || "")
        console.log()
    },[])
    const handleLogoutBtn = () => {
        handleLogout()
        // Perform logout logic here
        // Redirect the user to the login page or do any other necessary actions
    };
    function selectSub(){
        localStorage.setItem("submenu", 'sub1');
    }

    return (
      <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="demo-logo-vertical" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedSub} defaultOpenKeys={selectedSub}>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                      <Link href="/admin">Admin</Link>
                  </Menu.Item>
                  <SubMenu key="sub1" onClick={selectSub} icon={<TeamOutlined />}  title="Review">
                      <Menu.Item key="3">
                          <Link href="/admin/review/all">All Reviews</Link>
                      </Menu.Item>
                      <Menu.Item key="4">
                          <Link href="/admin/review/add">Create Review</Link>
                      </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<UserOutlined />} title="Staff">
                      <Menu.Item key="5">
                          <Link href="/admin/staff/all">All Staff</Link>
                      </Menu.Item>
                      <Menu.Item key="6">
                          <Link href="/admin/staff/add">Create New Staff</Link>
                      </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" icon={<FormOutlined />} title="Blog">
                      <Menu.Item key="8">
                          <Link href="/admin/blog/all">All Blogs</Link>
                      </Menu.Item>
                      <Menu.Item key="9">
                          <Link href="/admin/blog/add">Create Blog</Link>
                      </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub4" icon={<UserAddOutlined />} title="Category">
                      <Menu.Item key="15">
                          <Link href="/admin/category/all">All Categories</Link>
                      </Menu.Item>
                      <Menu.Item key="16">
                          <Link href="/admin/category/add">Create Category</Link>
                      </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub19" icon={<UserAddOutlined />} title="Car">
                      <Menu.Item key="17">
                          <Link href="/admin/car/all">All Car</Link>
                      </Menu.Item>
                      <Menu.Item key="18">
                          <Link href="/admin/car/add">Create Car</Link>
                      </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub5" icon={<UserOutlined />} title="Contact">
                      <Menu.Item key="12">
                          <Link href="/admin/contact/all">Form Result</Link>
                      </Menu.Item>
                      <Menu.Item key="13">
                          <Link href="/admin/contact/update">Update Info</Link>
                      </Menu.Item>
                  </SubMenu>                 
                  <SubMenu key="sub35" icon={<UserOutlined />} title="Services">
                      <Menu.Item key="312">
                          <Link href="/admin/service/1">Services</Link>
                      </Menu.Item>
                  </SubMenu>
                  <Menu.Item key="14" icon={<LogoutOutlined />} onClick={handleLogoutBtn}>
                      Logout
                  </Menu.Item>
              </Menu>
          </Sider>
          <Layout>
              <Header style={{ padding: 0, backgroundColor: colorBgContainer }}>
                  <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                  />
              </Header>
              <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
                 <div style={{minHeight:'80vh'}}>
                    {props.children}
                 </div>
              </Content>
          </Layout>
      </Layout>
    );
};

export default Navbar;
