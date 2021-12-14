import React, {useState, useEffect} from 'react'
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
import { Tag, Divider, Avatar } from 'antd';
import {Link} from 'react-router-dom'
import {MailFilled,
        EditFilled,
        EyeOutlined,
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
  }, [dispatch]);
console.log(profileData.intrests)

    if(!apiReady){
        return(
            <h1>Please Login</h1>
        )
    }else{
    return (
        <div>
            <div className="container">
  <div className="profile-header">
    <div className="profile-img">
    {(() => {
  
  switch (profileData?.avatar) {
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
        <p className="user-mail"><MailFilled />   {profileData.email}</p>
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
          <button className="chatbtn" id="chatBtn"><EyeOutlined /> View</button>
          <button className="chatbtn" id="chatBtn"><ShareAltOutlined /> Share</button>
          <Link to ='/edituserprofile' ><button className="createbtn" id="Create-post"><EditFilled /> Edit</button></Link>
        </div>
        <div className="user-rating">
          <h3 className="rating">4.5</h3>
          <div className="rate">
            <div className="star-outer">
              <div className="star-inner">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <span className="no-of-user-rate"><span>123</span>&nbsp;&nbsp;reviews</span>
          </div>

        </div>
      </div>

    </div>
    <div className="right-side">

      <div className="nav">
        <ul>
          <li  className="user-post active">Posts</li>
          <li  className="user-review">Replies</li>
          <li  className="user-setting"> Inbox</li>
          <li  className="user-setting"> Settings</li>
        </ul>
      </div>
      <div className="profile-body">
        <div className="profile-posts tab">
          <h1>Replies</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quia sunt itaque ut libero cupiditate ullam qui velit laborum placeat doloribus, non tempore nisi ratione error rem minima ducimus. Accusamus adipisci quasi at itaque repellat sed
            magni eius magnam repellendus. Quidem inventore repudiandae sunt odit. Aliquid facilis fugiat earum ex officia eveniet, nisi, similique ad ullam repudiandae molestias aspernatur qui autem, nam? Cupiditate ut quasi iste, eos perspiciatis maiores
            molestiae.</p>
        </div>
        <div className="profile-reviews tab">
          <h1>Inbox</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam pariatur officia, aperiam quidem quasi, tenetur molestiae. Architecto mollitia laborum possimus iste esse. Perferendis tempora consectetur, quae qui nihil voluptas. Maiores debitis
            repellendus excepturi quisquam temporibus quam nobis voluptatem, reiciendis distinctio deserunt vitae! Maxime provident, distinctio animi commodi nemo, eveniet fugit porro quos nesciunt quidem a, corporis nisi dolorum minus sit eaque error
            sequi ullam. Quidem ut fugiat, praesentium velit aliquam!</p>
        </div>
        <div className="profile-settings tab">
          <div className="account-setting">
            <h1>Acount Setting</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit omnis eaque, expedita nostrum, facere libero provident laudantium. Quis, hic doloribus! Laboriosam nemo tempora praesentium. Culpa quo velit omnis, debitis maxime, sequi
              animi dolores commodi odio placeat, magnam, cupiditate facilis impedit veniam? Soluta aliquam excepturi illum natus adipisci ipsum quo, voluptatem, nemo, commodi, molestiae doloribus magni et. Cum, saepe enim quam voluptatum vel debitis
              nihil, recusandae, omnis officiis tenetur, ullam rerum.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
}

export default Profile
