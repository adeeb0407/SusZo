import { Menu,Divider, Switch, Row, Button } from 'antd';
import React,{useRef, useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import '../styles/navbar.css'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import decode from "jwt-decode";
import {
  UserOutlined,
  HomeOutlined,
  AppstoreOutlined,
  InboxOutlined,
  SettingOutlined,
  LoginOutlined ,
  LogoutOutlined  ,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const Navbar = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [mode, setMode] = React.useState('inline');
  const [theme, setTheme] = React.useState('light');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
    setUser(null);
  };
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
        {user !== null &&<Menu.Item key="2" icon={<UserOutlined />}>
        <Link to ='/profile'>
          Profile
          </Link>
        </Menu.Item>}
        <Menu.Item key="3" icon={<InboxOutlined />}>
          Inbox
        </Menu.Item>
        <Menu.Item key="8" icon={<InboxOutlined />}>
        <Link to ='/user'>
          Find User
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<AppstoreOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        {user === null ?<Menu.Item  icon={<LoginOutlined />}>
        <Link to = '/login'>
            Login
        </Link>
        </Menu.Item> : <Menu.Item  icon={<LogoutOutlined />} onClick = {logout}>
            Logout
        </Menu.Item>}
      </Menu>
    </div>
    </>
  );
};

export default Navbar