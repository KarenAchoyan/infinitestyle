import React, { useState, useEffect, useContext } from 'react';
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
import NavbarContext from '@/providers/NavBarContext';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Navbar = (props) => {

    const {subMenu, setSubMenu} = useContext(NavbarContext)


    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer } } = theme.useToken();
    const router = useRouter();
    const [openSubmenus, setOpenSubmenus] = useState([]);

    const handleLogoutBtn = () => {
        handleLogout()
        // Perform logout logic here
        // Redirect the user to the login page or do any other necessary actions
    };
    function selectSub(s) {
        setSubMenu(s);
        setOpenSubmenus([s]);
    }

    const getSelectedKey = (path) => {
        const currentPath = router.pathname;
        // Extract the key from the path, for example, "/admin/blog/all" -> "3"
        const key = currentPath.split('/').slice(-2).join('/')
        return key===path;
    };

    const isSubmenuOpen = (submenu) => {
        return openSubmenus.includes(submenu);
    };

    const toggleSubmenu = (submenu) => {
        if (isSubmenuOpen(submenu)) {
            setOpenSubmenus([]);
        } else {
            setOpenSubmenus([submenu]);
        }
    };

    return (
      <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="demo-logo-vertical" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={subMenu} defaultOpenKeys={[subMenu]}>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                      <Link href="/admin">Admin</Link>
                  </Menu.Item>
                  <SubMenu key="sub1" onClick={()=>selectSub("sub1")} icon={<TeamOutlined />}  title="Review">
                      <Menu.Item key="3" className={getSelectedKey("review/all") ? "ant-menu-item-selected" : ""}>
                          <Link href="/admin/review/all">All Reviews</Link>
                      </Menu.Item>
                      <Menu.Item key="4" className={getSelectedKey("review/add") ? "ant-menu-item-selected" : ""}>
                          <Link href="/admin/review/add">Create Review</Link>
                      </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2"  onClick={()=>selectSub("sub2")}  icon={<UserOutlined />} title="Staff">
                      <Menu.Item key="5"  className={getSelectedKey("staff/all") ? "ant-menu-item-selected" : ""}>
                          <Link href="/admin/staff/all">All Staff</Link>
                      </Menu.Item>
                      <Menu.Item key="6" className={getSelectedKey("staff/add") ? "ant-menu-item-selected" : ""}>
                          <Link href="/admin/staff/add">Create New Staff</Link>
                      </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3"  onClick={()=>selectSub("sub3")}  icon={<FormOutlined />} title="Blog">
                      <Menu.Item key="8"  className={getSelectedKey("blog/all") ? "ant-menu-item-selected" : ""}>
                          <Link href="/admin/blog/all">All Blogs</Link>
                      </Menu.Item>
                      <Menu.Item key="9"  className={getSelectedKey("blog/add") ? "ant-menu-item-selected" : ""}>
                          <Link href="/admin/blog/add">Create Blog</Link>
                      </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub4"  onClick={()=>selectSub("sub4")}  icon={<UserAddOutlined />} title="Category">
                      <Menu.Item key="15"  className={getSelectedKey("category/all") ? "ant-menu-item-selected" : ""}>
                          <Link href="/admin/category/all">All Categories</Link>
                      </Menu.Item>
                      <Menu.Item key="16"  className={getSelectedKey("category/add") ? "ant-menu-item-selected" : ""}>
                          <Link href="/admin/category/add">Create Category</Link>
                      </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub19"  onClick={()=>selectSub("sub19")}  icon={<UserAddOutlined />} title="Car">
                      <Menu.Item key="17"  className={getSelectedKey("car/all") ? "ant-menu-item-selected" : ""}>
                          <Link href="/admin/car/all">All Car</Link>
                      </Menu.Item>
                      <Menu.Item key="18"  className={getSelectedKey("car/add") ? "ant-menu-item-selected" : ""}>
                          <Link href="/admin/car/add">Create Car</Link>
                      </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub5"  onClick={()=>selectSub("sub5")} icon={<UserOutlined />} title="Contact">
                      <Menu.Item key="12"  className={getSelectedKey("contact/all") ? "ant-menu-item-selected" : ""}>
                          <Link href="/admin/contact/all">Form Result</Link>
                      </Menu.Item>
                      <Menu.Item key="13"  className={getSelectedKey("contact/update") ? "ant-menu-item-selected" : ""}>
                          <Link href="/admin/contact/update">Update Info</Link>
                      </Menu.Item>
                  </SubMenu>                 
                  <SubMenu key="sub35"  onClick={()=>selectSub("sub35")} icon={<UserOutlined />} title="Services">
                      <Menu.Item key="312" >
                          <Link href="/admin/service/1">Services</Link>
                      </Menu.Item>
                  </SubMenu>
                  <Menu.Item key="14"  onClick={()=>selectSub("sub14")} icon={<LogoutOutlined />} >
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
