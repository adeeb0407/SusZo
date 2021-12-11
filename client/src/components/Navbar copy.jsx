import React, {useState, useRef} from 'react'
import { Button, Divider, Avatar, Badge  } from 'antd';
import { green } from '@ant-design/colors';
import {
    MenuOutlined,
    UserOutlined,

  } from '@ant-design/icons';

function Navbar() {
    const Navref = useRef('')
    const [navShow, setNavShow] = useState(true)
    const navShowToggle = () => {
        const nav = document.querySelector('.navShow')
        setNavShow(!navShow)
        if(navShow){
              nav.classList.add("nav_show_button");
          }else{
              nav.classList.remove("nav_show_button");
          }
    }
    return (
        <div className='navbar_styling'>
             <Button  className = 'nav_show_button' type={navShow ? "secondary" : "primary"} onClick={navShowToggle} ref = {Navref}>
            <MenuOutlined />
        </Button>
            <h1 className='title' style = {{color : 'white'}}>SusZo</h1>
            <span className="avatar-item">
      <Badge count={1}>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
    </span>
        </div>
    )
}

export default Navbar
