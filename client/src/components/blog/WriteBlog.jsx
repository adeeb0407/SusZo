import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../styles/writeBlog.css";
import { message, Button, Form, Input, Tabs} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {postBlog} from '../../actions/blog'
import { FileWordOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom'
import {InfoCircleOutlined}from '@ant-design/icons';
import TextArea from "antd/lib/input/TextArea";

export default function WriteBlog() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const { TabPane } = Tabs;

  const dispatch = useDispatch()
  const navigate = useNavigate()

const finalData = {
  title : title,
  snippet : snippet,
  blogBody : blogBody,
  userId : user.response.id,
}

const blogData = useSelector(state => state.user_blog)
const handelSubmit = () => {
  if(finalData.title.trim() === '' || finalData.snippet.trim() === '' || finalData.blogBody.trim() === ''){
    message.error('Please Fill in All the Values', 2)
  }else{
  dispatch(postBlog(finalData))
  navigate('/whatsnew')
  setTitle('')
  setBlogBody('')
  console.log(blogData)
    }
};
  return (
    <div className="blogPage">
      <Tabs defaultActiveKey="2">
    <TabPane
    style = {{marginBottom : '20px'}}
      tab={
        <span>
          <FileWordOutlined />
          Dairy Writer
        </span>
      }
      key="1"
    >
    </TabPane>
    </Tabs>
      <Form
      onFinish={handelSubmit}
        name="basic"  
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          tooltip={{
          title: 'Title Your Diary to show people what is the content Summaries ',
          icon: <InfoCircleOutlined />,
        }}
          rules={[
            {
              required: true,
              message: "Please Write your Title!",
            },
          ]}
        >
          <Input name = 'title' value = {title} onChange = {(e) => setTitle(e.target.value)}/>
        </Form.Item>
        <Form.Item
          label="Diary Snippet"
          tooltip={{
          title: 'Snippet is a Summary of your Diary for Attracting people to Read your Entier Diary',
          icon: <InfoCircleOutlined />,
        }}
          rules={[
            {
              required: true,
              message: "Please Write your Diary Snippet!",
            },
          ]}
        >
          <Input.TextArea autoSize name = 'snippet' value = {snippet} onChange = {(e) => setSnippet(e.target.value)}/>
        </Form.Item>
        <Form.Item
            rules={[
            {
              required: true,
              message: "Please Write your Diary Snippet!",
            },
          ]}
        >
      <ReactQuill
        className="blogWriter"
        theme="snow"
        value={blogBody}
        onChange={setBlogBody}
      />
      </Form.Item>
      <Form.Item>
      <Button type="primary" htmlType="submit" className="publishBlog">
        Publish Public Diary
      </Button>
      </Form.Item>
      </Form>
    </div>
  );
}
