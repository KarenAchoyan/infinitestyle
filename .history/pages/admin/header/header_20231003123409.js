import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  TeamOutlined
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
  const [openSubmenu, setOpenSubmenu] = useState(null); // Store the open submenu key
  const { token: { colorBgContainer } } = theme.useToken();
  const router = useRouter();

  useEffect(() => {
    // Determine which submenu should be open based on the current page
    const currentPath = router.pathname;
    if (currentPath.startsWith('/admin/review')) {
      setOpenSubmenu('sub1');
    } else if (currentPath.startsWith('/admin/staff')) {
      setOpenSubmenu('sub2');
    } else if (currentPath.startsWith('/admin/blog')) {
      setOpenSubmenu('sub3');
    } else if (currentPath.startsWith('/admin/category')) {
      setOpenSubmenu('sub4');
    } else if (currentPath.startsWith('/admin/car')) {
      setOpenSubmenu('sub19');
    } else if (currentPath.startsWith('/admin/contact')) {
      setOpenSubmenu('sub5');
    } else if (currentPath.startsWith('/admin/service')) {
      setOpenSubmenu('sub35');
    }
  }, [router.pathname]);

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
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link href="/admin">Admin</Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<TeamOutlined />}
            title="Review"
            openKeys={openSubmenu === 'sub1' ? ['sub1'] : []} // Open submenu based on state
            onTitleClick={() => setOpenSubmenu('sub1')} // Click to open submenu
          >
            <Menu.Item key="3">
              <Link href="/admin/review/all">All Reviews</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link href="/admin/review/add">Create Review</Link>
            </Menu.Item>
          </SubMenu>
          {/* Add other submenu items in a similar way */}
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
