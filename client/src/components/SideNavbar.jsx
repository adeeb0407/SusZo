import { Menu,Divider, Switch, Row, Button, message } from 'antd';
import React,{useRef, useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import '../styles/navbar.css'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LogoutPopup from './misc/LogoutPopup'
import decode from "jwt-decode";
import {
  UserOutlined,
  HomeOutlined,
  AppstoreOutlined,
  InboxOutlined,
  SettingOutlined,
  LoginOutlined ,
  LogoutOutlined  ,
  UsergroupAddOutlined,
  CompassOutlined,
} from '@ant-design/icons';
import { borderColor } from '@mui/system';

const { SubMenu } = Menu;

const Navbar = ({navShowToggle}) => {
  const [open, setOpen] = React.useState(false);
  
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')))
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
  const handleLogout = () => {
    logout()
    message.success('User Sucessfully Logged Out');
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

 const handleClose = () => {
   setOpen(false);
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
        <Menu.Item key="1" icon={<HomeOutlined />} onClick = {navShowToggle}>
        <Link to = '/'>
          Home
          </Link>
        </Menu.Item>
        {user !== null &&<Menu.Item key="2" icon={<UserOutlined />} onClick = {navShowToggle}>
        <Link to ='/profile'>
          Profile
          </Link>
        </Menu.Item>}
        {user !== null  &&<Menu.Item key="3" icon={<InboxOutlined />} onClick = {navShowToggle}>
        <Link to ='/inbox'>
          Inbox
          </Link>
        </Menu.Item>}
        {user !== null  &&<Menu.Item key="10" icon={<CompassOutlined />} onClick = {navShowToggle}>
        <Link to ='/whatsnew'>
          Whats's New
          </Link>
        </Menu.Item>}
        <Menu.Item key="8" icon={<UsergroupAddOutlined />} onClick = {navShowToggle}>
        <Link to ='/user'>
          Find User
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<AppstoreOutlined />} onClick = {navShowToggle}>
          About
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />} onClick = {navShowToggle}>
        <Link to ='/settings'>
          Settings
        </Link>
        </Menu.Item>
        {user === null ?<Menu.Item  icon={<LoginOutlined />} onClick = {navShowToggle}>
        <Link to = '/login'>
            Login
        </Link>
        </Menu.Item> : <Menu.Item  icon={<LogoutOutlined />} onClick={handleClickOpen}>
            Logout
        </Menu.Item>}
      </Menu>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you Sure you want ot Logout?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "green", borderColor : 'green'}}>No, ll'l stay</Button>
          <Button onClick={handleLogout} autoFocus style={{ color: "red", borderColor : 'red'}}>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  );
};

export default Navbar