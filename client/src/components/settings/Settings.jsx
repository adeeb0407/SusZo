import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {Link} from 'react-router-dom'
import {Tabs, Spin} from "antd";
import {    
  DownOutlined,
  UpOutlined,
  LogoutOutlined ,
  BookOutlined,
  EditOutlined,
  UserDeleteOutlined,
  BgColorsOutlined,
  AntCloudOutlined,
  YuqueOutlined,
  SettingOutlined,
  }
from '@ant-design/icons'

export default function Settings() {
  const [open, setOpen] = React.useState(false);

  const { TabPane } = Tabs;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
              <Tabs defaultActiveKey="2">
    <TabPane
    style = {{marginBottom : '20px'}}
      tab={
        <span>
          <SettingOutlined />
          Settings
        </span>
      }
      key="1"
    >
    </TabPane>
    </Tabs>
    
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
    >
      <ListItemButton>
        <ListItemIcon>
        <BookOutlined size = 'large'/>
        </ListItemIcon>
        <ListItemText primary="Terms And Conditions" />
      </ListItemButton>
      <Link to ='/edituserprofile'>
      <ListItemButton>
        <ListItemIcon>
        <EditOutlined />
        </ListItemIcon>
        <ListItemText primary="Edit Profile" />
      </ListItemButton>
        </Link>
      <Link to ='/edituserprofile'>
      <ListItemButton style = {{color: 'red'}}>
        <ListItemIcon>
        <UserDeleteOutlined size = 'large'/>
        </ListItemIcon>
        <ListItemText primary="Delete Account" />
      </ListItemButton>
        </Link>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <BgColorsOutlined size = 'large'/>
        </ListItemIcon>
        <ListItemText primary="Change Theme" />
        {open ? <DownOutlined /> : <UpOutlined />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <AntCloudOutlined />
            </ListItemIcon>
            <ListItemText primary="Dark" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <YuqueOutlined />
            </ListItemIcon>
            <ListItemText primary="Light" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    </>
  );
}
