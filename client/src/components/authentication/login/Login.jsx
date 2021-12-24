import { useState, useEffect} from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import '../../../styles/loginFrom.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import ScrollAnimation from 'react-animate-on-scroll';
import {login} from '../../../actions/userActions'

const Login = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const history = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
      username: '',
      password : '',
  })

  useEffect(() => {
    const token = user?.token;
    if(user !== null){
        history('/')
        return;
    }
  }, [location, user]);

  const handelCredentials = (e) => {
    const {name, value} = e.target;
    setLoginDetails({...loginDetails, [name]:value})
}


  const onFinish = (values) => {
    console.log(loginDetails);
    dispatch(login(loginDetails, history));
  };

  return (
    <div className='loginFrom'>
    <ScrollAnimation animateIn="fadeIn">
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
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"  name = 'username' onChange = {handelCredentials}/>
      </Form.Item>
      <Form.Item
        name="password"
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
          onChange = {handelCredentials}
          name ='password'
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
          Log in <LoginOutlined />
        </Button>
         &nbsp; Or <Link to = '/register'>register now!</Link>
      </Form.Item>
    </Form>
    </ScrollAnimation>
    </div>
  );
};

export default Login