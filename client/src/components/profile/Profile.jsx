import React, {useState} from 'react'
import '../../styles/profile.css'
import suszo_logo from '../../images/suszo_logo.png'
import girl from '../../images/female.png'
import boy from '../../images/male.png'
import other from '../../images/male.png'
import {MailFilled,
        EditFilled,
        EyeOutlined,

} from '@ant-design/icons';

function Profile() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    if(user === null){
        return(
            <h1>Please Login</h1>
        )
    }else{
    return (
        <div>
            <div class="container">
  <div class="profile-header">
    <div class="profile-img">
      <img src={user.response.gender === 'male' ?boy : user.response.gender === 'female'? girl : other} width="200" alt="Profile Image" />
    </div>
    <div class="profile-nav-info">
      <h3 class="user-name">{user.response.fullname}</h3>
      <div class="address">
        <p id="state" class="state">{user.response.gender === 'male' ? 'Male' : user.response.gender === 'female'? 'Female' : 'Others'}</p>
      </div>

    </div>
  </div>

  <div class="main-bd">
    <div class="left-side">
      <div class="profile-side">
        <p class="mobile-no"><i class="fa fa-phone"></i> +23470xxxxx700</p>
        <p class="user-mail"><MailFilled />{user.response.email}</p>
        <div class="user-bio">
          <h3>Bio</h3>
          <p class="bio">
            Lorem ipsum dolor sit amet, hello how consectetur adipisicing elit. Sint consectetur provident magni yohoho consequuntur, voluptatibus ghdfff exercitationem at quis similique. Optio, amet!
          </p>
        </div>
        <div class="profile-btn">
          <button class="chatbtn" id="chatBtn"><EyeOutlined /> View</button>
          <button class="createbtn" id="Create-post"><EditFilled /> Edit</button>
        </div>
        <div class="user-rating">
          <h3 class="rating">4.5</h3>
          <div class="rate">
            <div class="star-outer">
              <div class="star-inner">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
            <span class="no-of-user-rate"><span>123</span>&nbsp;&nbsp;reviews</span>
          </div>

        </div>
      </div>

    </div>
    <div class="right-side">

      <div class="nav">
        <ul>
          <li onclick="tabs(0)" class="user-post active">Posts</li>
          <li onclick="tabs(1)" class="user-review">Replies</li>
          <li onclick="tabs(2)" class="user-setting"> Inbox</li>
          <li onclick="tabs(2)" class="user-setting"> Settings</li>
        </ul>
      </div>
      <div class="profile-body">
        <div class="profile-posts tab">
          <h1>Replies</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quia sunt itaque ut libero cupiditate ullam qui velit laborum placeat doloribus, non tempore nisi ratione error rem minima ducimus. Accusamus adipisci quasi at itaque repellat sed
            magni eius magnam repellendus. Quidem inventore repudiandae sunt odit. Aliquid facilis fugiat earum ex officia eveniet, nisi, similique ad ullam repudiandae molestias aspernatur qui autem, nam? Cupiditate ut quasi iste, eos perspiciatis maiores
            molestiae.</p>
        </div>
        <div class="profile-reviews tab">
          <h1>Inbox</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam pariatur officia, aperiam quidem quasi, tenetur molestiae. Architecto mollitia laborum possimus iste esse. Perferendis tempora consectetur, quae qui nihil voluptas. Maiores debitis
            repellendus excepturi quisquam temporibus quam nobis voluptatem, reiciendis distinctio deserunt vitae! Maxime provident, distinctio animi commodi nemo, eveniet fugit porro quos nesciunt quidem a, corporis nisi dolorum minus sit eaque error
            sequi ullam. Quidem ut fugiat, praesentium velit aliquam!</p>
        </div>
        <div class="profile-settings tab">
          <div class="account-setting">
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
