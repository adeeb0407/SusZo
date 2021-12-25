import { useState, useEffect} from 'react';
import { Form, Input, Button, Select, Checkbox, message } from 'antd';
import { UserOutlined,  Option,LockOutlined, CaretRightOutlined, MailOutlined   } from '@ant-design/icons';
import '../../../styles/loginFrom.css'
import {register} from '../../../actions/userActions'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

const Register = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;
  
    if(user !== null){
        history('/profile')
    }
  }, [location]);

  const { Option } = Select;
  const [userData, setUserData] = useState({
    fullname : '',
    gender : '',
    email : '',
    username : '',
    password: '',
    confirmpassword: ''
  })

  const onFinish = (e) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regex.test(userData.email) === false){
      message.error('Please put in a proper Email')
    }else{
    dispatch(register(userData, history))
  }
  };

  const handelChange = (e) => {
    const {value , name} = e.target
    setUserData({...userData, [name]:value})
    }

  const onGenderChange = (value) => {
    console.log(value)
    if(userData.password !== userData.confirmpassword){
      console.log('please enter proper password')
    }else{
    setUserData({...userData, gender : value})
    }
  };

  return (
    <div className='loginFrom'>
    <Form 
    size = 'large'
      name="normal_login"
      className="login-form aligniment"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        rules={[
          {
            required: true,
            message: 'Please input your Full Name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name" name="fullname"
        onChange ={handelChange}/>
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
      <Form.Item
        name="gender"
        onChange = {handelChange}
        rules={[
          {
            required: true,
            message: 'Please input your Gender!',
          },
        ]}
      >
        <Select
          placeholder="Gender"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
        <Input prefix={<MailOutlined  className="site-form-item-icon" />} placeholder="Email"  name="email" onChange = {handelChange}/>
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" name="username" onChange = {handelChange} />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          name="password"
          onChange = {handelChange}
        />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm Password"
          name="confirmpassword"
          onChange = {handelChange}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register <CaretRightOutlined/>
        </Button>
        &nbsp; Or <Link to ='/login'> Already have an account?</Link>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Register