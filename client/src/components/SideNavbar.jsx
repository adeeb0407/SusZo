import { Menu,Divider, Switch, Row, Button } from 'antd';
import React,{useRef, useState} from 'react'
import '../styles/navbar.css'
import {Link} from 'react-router-dom'
import {
  UserOutlined,
  HomeOutlined,
  AppstoreOutlined,
  InboxOutlined,
  SettingOutlined,
  LoginOutlined ,
  UserAddOutlined ,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const Navbar = () => {

  const [mode, setMode] = React.useState('inline');
  const [theme, setTheme] = React.useState('light');

  const changeMode = value => {
    setMode(value ? 'vertical' : 'inline');
  };

  const changeTheme = value => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <>
    <div className = 'navMain'>
      {/* <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br /> */}
      <Menu
        style={{ width: 256}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        className = 'navShow'
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to = '/'>
          Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="3" icon={<InboxOutlined />}>
          Inbox
        </Menu.Item>
        <Menu.Item key="4" icon={<AppstoreOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item  icon={<LoginOutlined />}>
        <Link to = '/login'>
            Login
        </Link>
        </Menu.Item>
        <Menu.Item  icon={<UserAddOutlined />}>
        <Link to = '/register'>
            Register
        </Link>
        </Menu.Item>
      </Menu>
    </div>
    </>
  );
};

export default Navbar