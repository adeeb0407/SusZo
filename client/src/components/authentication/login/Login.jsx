import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import '../../../styles/loginFrom.css'
import {Link} from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

const Login = () => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
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
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
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