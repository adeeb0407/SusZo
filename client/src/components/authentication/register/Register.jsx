import { Form, Input, Button, Select, Checkbox } from 'antd';
import { UserOutlined,  Option,LockOutlined, CaretRightOutlined, MailOutlined   } from '@ant-design/icons';
import '../../../styles/loginFrom.css'
import {Link} from 'react-router-dom'

const Register = () => {
  const { Option } = Select;

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const onGenderChange = (value) => {
    console.log(value)
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
        name="fullName"
        rules={[
          {
            required: true,
            message: 'Please input your Full Name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
      <Form.Item
        name="gender"
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
        <Input prefix={<MailOutlined  className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
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
          Register <CaretRightOutlined/>
        </Button>
        &nbsp; Or <Link to ='/login'> Already have an account?</Link>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Register