import React, {useState} from 'react';
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import Link from "next/link";

const {SubMenu, Item} = Menu;

const MobileMenu = () => {
    const [openKeys, setOpenKeys] = useState([]);

    const handleMenuOpenChange = (keys) => {
        setOpenKeys(keys);
    };

    return (
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={handleMenuOpenChange}
        >
            <Item key="1">
                <Link href='/home'>Home</Link>
            </Item>
            <Item key="1">
                <Link href='/about'>About us</Link>
            </Item>
            <Item key="1">
                <Link href={'/blog'}>Blog</Link>
            </Item>

            <SubMenu key="sub1" title="Service">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>

            <Item key="1">
                <Link href='/contact'>Contact</Link>
            </Item>
        </Menu>
    );
};

export default MobileMenu;
