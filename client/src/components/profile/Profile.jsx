import React, {useState, useEffect, useRef} from 'react'
import '../../styles/profile.css'
import male1 from '../../images/male1.png'
import male2 from '../../images/male2.png'
import male3 from '../../images/male3.png'
import male4 from '../../images/male4.png'
import female1 from '../../images/female1.png'
import female2 from '../../images/female2.png'
import female3 from '../../images/female3.png'
import female4 from '../../images/female4.png'
import default_male from '../../images/default_male.jpg'
import default_female from '../../images/default_female.jpg'
import other from '../../images/other.png'
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { FaTransgenderAlt, FaUserAlt } from 'react-icons/fa';
import {fetchUsersById} from '../../actions/getUsers'
import { useDispatch, useSelector } from 'react-redux';
import { Tag, Divider, Spin,Avatar, message } from 'antd';
import {Link, Routes, Route, Outlet } from 'react-router-dom'
import MyBlogs from '../blog/MyBlogs'
import Replies from '../reply/Replies'
import {deleteReply} from '../../actions/replies'
import {MailFilled,
        EditFilled,
        BookOutlined,
        ShareAltOutlined,
        UserOutlined,

} from '@ant-design/icons';

function Profile() {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [apiReady, setApiReady] = useState(false);
  const dispatch = useDispatch()
  const profileData = useSelector((state) => state.userById)

  useEffect(() => {
    dispatch(fetchUsersById(user.response.id),setApiReady(true));
    const deletedData = profileData.replies
  }, []);

 const activeClass = useRef()

 const handelActiveClass = () =>{
  const activeClass = document.querySelector(".userStatus")
  for (let i = 0; i < activeClass.length; i++) {
    activeClass[i].classList.toggle("active_item");
  }
 }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://suszo.netlify.app/user/${profileData?.username}`);
    message.success('User URL copied to Clipboard');
  }

  console.log(profileData)



    if(!apiReady){
        return(
            <h1>Please Login</h1>
        )
    }else if(!profileData){
      return(<Spin size="large" className = 'lazyLoading'/>)
    }else{
    return (
        <div>
            <div className="container">
  <div className="profile-header">
    <div className="profile-img">
    {(() => {
  
  switch (profileData?.avatar || profileData.gender) {
     case 'male1':
      return(<img src={male1} width="200" alt="Profile Image" />)
     case 'male2':
      return(<img src={male2} width="200" alt="Profile Image" />)
     case 'male3':
      return(<img src={male3} width="200" alt="Profile Image" />)
     case 'male4':
      return(<img src={male4} width="200" alt="Profile Image" />)
     case 'female1':
         return (
          <img src={female1} width="200" alt="Profile Image" />
         )
     case 'female2':
         return (
          <img src={female2} width="200" alt="Profile Image" />
         )
     case 'female3':
         return (
          <img src={female3} width="200" alt="Profile Image" />
         )
     case 'female4':
         return (
          <img src={female4} width="200" alt="Profile Image" />
         )
     case 'female':
         return (
          <img src={default_female} width="200" alt="Profile Image" />
         )
     case 'male':
         return (
          <img src={default_male} width="200" alt="Profile Image" />
         )
     default:
         return (
          <img src ={Profile.gender === 'male' ? default_male : Profile.gender === 'female' ? default_female : default_male}  width="200px" />
         )
  }

})()}
    </div>
    <div className="profile-nav-info">
      <h3 className="user-name">{profileData.username}</h3>
      <div className="address">
      {profileData?.gender === 'male' &&
        <p id="state" className="state">Male <BsGenderMale style = {{color : '#1890ff'}}/></p>}
      {profileData?.gender === 'female' &&
        <p id="state" className="state">Female <BsGenderFemale style = {{color : '#D612CE'}}/></p>}
      {profileData.gender === 'other' &&
        <p id="state" className="state">Other <FaTransgenderAlt /></p>}
      </div>

    </div>
  </div>

  <div className="main-bd">
    <div className="left-side">
      <div className="profile-side">
        <p className="mobile-no"><FaUserAlt />   {profileData.fullname}</p>
        {/* <p className="user-mail"><MailFilled />   {profileData.email}</p> */}
        <div className="user-bio">
          <h3>Headline : </h3>
          <p className="bio">
           {profileData.headline}
          </p>
        </div>
        <div className="user-bio">
          <h3>Bio : </h3>
          <p className="bio">
            {profileData.bio}
          </p>
        </div>
        <Divider orientation='left'>Intrests</Divider>
       <div>
        {profileData.intrests?.map((dataItem)=>
        <Tag color="geekblue" style = {{marginBottom: '10px'}}>{dataItem}</Tag>
        )}
        </div>
        <div className="profile-btn">
         <button className="chatbtn" id="chatBtn"><Link to='/writeBlog' style = {{color : 'white'}}><BookOutlined /> Write a Diary</Link></button> 
          <button className="chatbtn" id="chatBtn" onClick = {copyToClipboard}><ShareAltOutlined /> Share</button>
          <Link to ='/edituserprofile' ><button className="createbtn" id="Create-post"><EditFilled /> Edit</button></Link>
        </div>
      </div>
    </div>
    <div className="right-side">
      <div className="nav" ref = {activeClass}>
        <ul>
        <Link to = '/profile'>
          <li  className="user-post userStatus" onClick = {handelActiveClass}>Replies</li>
          </Link>
          <Link to = '/profile'>
          <li  className="user-review userStatus" onClick = {handelActiveClass}>Inbox</li>
          </Link>
          <Link to = '/profile/mydiary'>
          <li  className="user-setting userStatus" onClick = {handelActiveClass}>Diary</li>
          </Link>
          <Link to = '/profile/mydiary'>
          <li  className="user-setting userStatus" onClick = {handelActiveClass}> Settings</li>
          </Link>
        </ul>
      </div>
      <div className="profile-body">
      <Routes>
      <Route exact path = '/' element = {<Replies  replies = {profileData?.replies} userId = {user.response.id} verifyId = {profileData?._id}/>} />
      </Routes>
      <Outlet />
    </div>
    </div>
  </div>
</div>
        </div>
    )
}
}

export default Profile
