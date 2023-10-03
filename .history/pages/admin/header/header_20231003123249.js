import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  // ...other imports
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Link from 'next/link';
import { handleLogout } from '@/configs/axiosIntance';
import { useRouter } from 'next/router';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Navbar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();
  const router = useRouter();

  // Determine which submenu should be opened based on the current page
  const currentPath = router.pathname;
  let defaultOpenKeys = [];

  if (currentPath.startsWith('/admin/review')) {
    defaultOpenKeys = ['sub1'];
  } else if (currentPath.startsWith('/admin/staff')) {
    defaultOpenKeys = ['sub2'];
  } else if (currentPath.startsWith('/admin/blog')) {
    defaultOpenKeys = ['sub3'];
  } else if (currentPath.startsWith('/admin/category')) {
    defaultOpenKeys = ['sub4'];
  } else if (currentPath.startsWith('/admin/car')) {
    defaultOpenKeys = ['sub19'];
  } else if (currentPath.startsWith('/admin/contact')) {
    defaultOpenKeys = ['sub5'];
  } else if (currentPath.startsWith('/admin/service')) {
    defaultOpenKeys = ['sub35'];
  }

  // Determine which menu item should be selected based on the current page
  let selectedKeys = ['1'];

  if (currentPath.startsWith('/admin/review')) {
    selectedKeys = ['3'];
  } else if (currentPath.startsWith('/admin/staff')) {
    selectedKeys = ['5'];
  } else if (currentPath.startsWith('/admin/blog')) {
    selectedKeys = ['8'];
  } else if (currentPath.startsWith('/admin/category')) {
    selectedKeys = ['15'];
  } else if (currentPath.startsWith('/admin/car')) {
    selectedKeys = ['17'];
  } else if (currentPath.startsWith('/admin/contact')) {
    selectedKeys = ['12'];
  } else if (currentPath.startsWith('/admin/service')) {
    selectedKeys = ['312'];
  } else if (currentPath.startsWith('/admin')) {
    selectedKeys = ['1'];
  }

  const handleLogoutBtn = () => {
    handleLogout();
    // Perform logout logic here
    // Redirect the user to the login page or do any other necessary actions
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={selectedKeys} // Set the selected menu item
          defaultOpenKeys={defaultOpenKeys} // Set the opened submenu
        >
          {/* Menu items */}
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
          <div style={{ minHeight: '80vh' }}>{props.children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
