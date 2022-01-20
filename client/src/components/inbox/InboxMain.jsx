import React from 'react'
import Chats from './Chats'
import Message from './Message'
import '../../styles/inbox.css'
import { Button, Input } from 'antd';
import {
    WechatOutlined,
    AudioOutlined,
  } from '@ant-design/icons'


function InboxMain() {
    const { Search } = Input;

    const onSearch = value => {
      console.log(value);
    }
  
    const suffix = (
      <AudioOutlined
        style={{
          fontSize: 16,
          color: '#1890ff',
        }}
      />
    );

    return (
        <div className= 'inbox-main' >
        <div className = 'inbox-chats'>
            <Chats />
        </div>
        <div className = 'inbox-message'>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
        {/* <div className = 'inbox-message-own'>
            <Message />
        </div> */}
        <div className = 'inbox-chat-send'>
        <Search
      placeholder="Message"
      enterButton='send'
      size="large"
      suffix={suffix}
      onSearch={onSearch}
      icon = {<WechatOutlined />}
    />
        </div>
        </div>
    )
}

export default InboxMain
