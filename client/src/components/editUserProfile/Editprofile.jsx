import { Form, Input, Button, Select, Radio, message } from 'antd';
import {InfoCircleOutlined} from '@ant-design/icons'
import {useState, useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsersById, updateUserProfile} from '../../actions/getUsers'
import {useNavigate} from 'react-router-dom'
import Intrests from './IntrestsCompoennt'
import female1 from '../../images/female1.png'
import female2 from '../../images/female2.png'
import female3 from '../../images/female3.png'
import female4 from '../../images/female4.png'
import male1 from '../../images/male1.png'
import male2 from '../../images/male2.png'
import male3 from '../../images/male3.png'
import male4 from '../../images/male4.png'
import other from '../../images/other.png'
import '../../styles/editprofile.css'
import {UserOutlined} from '@ant-design/icons'
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Editprofile = () => {

  const navigate = useNavigate();
  const [userLogedIn, setUserLogedIn] = useState(JSON.parse(localStorage.getItem('profile')))
  const [userDetails, setUserDetails] = useState({
    avatar : '',
    username: '',
    fullname: '',
    email : '',
    headline : '',
    intrests : [],
    gender : '',
    bio :''
  })
  const {TextArea} = Input
  const dispatch = useDispatch()
  const [userDataChange, setuserDataChange] = useState(false)
  const userById = useSelector((state) => state.userById)
  
  const styleRef = useRef('')
  const [form] = Form.useForm();
  
  useEffect(() => {
    dispatch(fetchUsersById(userLogedIn.response.id));
    setuserDataChange(false)
    if (userById !== ''){ 
      setUserDetails(userById);
      return
    }
}, []);

console.log(userDetails.intrests)

  

  const handelAvatar = (e)=> {
    const {name , value} = e.target
    console.log(e.target.value)
    setUserDetails({...userDetails, [name]:value})
  }

  const handelEditChange = (e) => {
    const {name , value} = e.target
    setUserDetails({...userDetails, [name]:value})
  }
  const onGenderChange = (value) => {
  };

  const onFinish = (values) => {
    dispatch(updateUserProfile(userLogedIn.response.id, userDetails, navigate));
    message.success('Profile has been Updated');
  };

  const onReset = () => {
    form.resetFields();
  };

  const newDataForIntrests = (array) => {
                    setUserDetails({
                      ...userDetails,
                      intrests: array,
                    })
  }

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  return (
    <div className = 'edit_profile_main'>
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className='editprofile'>
    <Form.Item 
     requiredmark = 'optional'
    label="Choose a Avatar"
     name="avatar"
       tooltip={{
          title: 'Avatar will give you a Personality Check (optional)',
          icon: <InfoCircleOutlined />,
        }}
     >
     {userLogedIn.response.gender === 'male' ?
      <div className='avatars'>
  <label class="radio-img">
    <input type="radio" name="avatar" value="male1" onClick = {handelEditChange}/>
    <div class="avatar_image" style={{backgroundImage: `url(${male1})`}}></div>
  </label>

  <label class="radio-img">
    <input type="radio" name="avatar" value="male2" onClick = {handelEditChange}/>
    <div class="avatar_image" style={{backgroundImage: `url(${male2})`}}></div>
  </label>

  <label class="radio-img">
    <input type="radio" name="avatar" value="male3" onClick = {handelEditChange}/>
    <div class="avatar_image" style={{backgroundImage: `url(${male3})`}}></div>
  </label>
  <label class="radio-img">
    <input type="radio" name="avatar" value="male4" onClick = {handelEditChange}/>
    <div class="avatar_image" style={{backgroundImage: `url(${male4})`}}></div>
  </label>
    </div>
    : userLogedIn.response.gender === 'female' ?
    <div className='avatars'>
  <label class="radio-img">
    <input type="radio" name="avatar" value="female1" onClick = {handelEditChange}/>
    <div class="avatar_image" style={{backgroundImage: `url(${female1})`}}></div>
  </label>

  <label class="radio-img">
    <input type="radio" name="avatar" value="female2" onClick = {handelEditChange}/>
    <div class="avatar_image" style={{backgroundImage: `url(${female2})`}}></div>
  </label>

  <label class="radio-img">
    <input type="radio" name="avatar" value="female3" onClick = {handelEditChange}/>
    <div class="avatar_image" style={{backgroundImage: `url(${female3})`}}></div>
  </label>
  <label class="radio-img">
    <input type="radio" name="avatar" value="female4" onClick = {handelEditChange}/>
    <div class="avatar_image" style={{backgroundImage: `url(${female4})`}}></div>
  </label>
    </div>
    :
    <div className='avatars'>
  <label class="radio-img">
    <input type="radio" name="avatar" value="other" onClick = {handelEditChange}/>
    <div class="avatar_image" style={{backgroundImage: `url(${other})`}}></div>
  </label>

  <label class="radio-img">
    <input type="radio" name="avatar" value="other" onClick = {handelEditChange}/>
    <div class="avatar_image" style={{backgroundImage: `url(${other})`}}></div>
  </label>

  <label class="radio-img">
    <input type="radio" name="avatar" value="other" onClick = {handelEditChange}/>
    <div class="avatar_image" style={{backgroundImage: `url(${other})`}}></div>
  </label>
  <label class="radio-img">
    <input type="radio" name="avatar" value="other" onClick = {handelEditChange}/>
    <div class="avatar_image" style={{backgroundImage: `url(${other})`}}></div>
  </label>
    </div>
    }
    <input type="radio" name="avatar" value="" onClick = {handelEditChange}/>
    <label class="radio-img"> 
     &nbsp; Remove Avatar
    </label>
      </Form.Item>
      <Form.Item
      tooltip={{
          title: 'Username of your Profile',
          icon: <InfoCircleOutlined />,
        }}
        label="UserName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input prefix={<UserOutlined />} name="username" placeholder='User Name' value = {userDetails.username} onChange = {handelEditChange}/>
      </Form.Item>
      <Form.Item 
      tooltip={{
          title: 'Full Name of your Profile',
          icon: <InfoCircleOutlined />,
        }}
        label="Full Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="fullname" type = 'text' placeholder='Full Name' value = {userDetails.fullname} onChange = {handelEditChange}/>
      </Form.Item>
      <Form.Item
       tooltip={{
          title: 'Email of your Profile',
          icon: <InfoCircleOutlined />,
        }}
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="email" type = 'email' placeholder='Email Address' value = {userDetails.email} onChange = {handelEditChange}/>
      </Form.Item>
      <Form.Item
        requiredmark = 'optional'
       tooltip={{
          title: 'Headline is a Caption for user when view your profile can have a Summary of your Profile',
          icon: <InfoCircleOutlined />,
        }}
        label="HeadLine"
      >
        <TextArea autoSize name="headline" placeholder="HeadLine" value = {userDetails.headline} onChange = {handelEditChange}/>
      </Form.Item>
      <Form.Item
      requiredmark = 'optional'
      tooltip={{
          title: 'Intrestes are the tags that will help people search a user with simiar intrests to chat with',
          icon: <InfoCircleOutlined />,
        }}
        label="Intrests">
      <Intrests intrests = {userById} newIntrestsData = {newDataForIntrests}/>
      </Form.Item>
      {/* <Form.Item
      requiredmark = 'optional'
      tooltip={{
          title: 'Intrestes are the tags that will help people search a user with simiar intrests to chat with',
          icon: <InfoCircleOutlined />,
        }}
        label="Intrests"
      >
        <TextArea 
        autoSize
        name="intrests" 
        placeholder='Intrests' 
        value = {userDetails.intrests}   
        onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      intrests: e.target.value.split(","),
                    })
 }/>
      </Form.Item> */}
      <Form.Item 
        label="Bio"
        requiredmark = 'optional'
        tooltip={{
          title: 'Bio is a Summary of Your Life and Yourself keep it breif and Personal',
          icon: <InfoCircleOutlined />,
        }}

       >
        <Input.TextArea allowClear cols = '10' rows = '10' className='bio_edit_profile' name='bio' value = {userDetails.bio} onChange = {handelEditChange}/>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Update Profile
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Editprofile