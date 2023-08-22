import React, {useState} from 'react';
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';

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
                Home
            </Item>
            <Item key="1">
                About us
            </Item>
            <Item key="1">
                Blog
            </Item>

            <SubMenu key="sub1" title="Service">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>

            <Item key="1">
                Contact
            </Item>
        </Menu>
    );
};

export default MobileMenu;
