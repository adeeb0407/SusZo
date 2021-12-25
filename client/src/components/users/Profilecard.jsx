import React from 'react'
import '../../styles/usercard.css'
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
import { Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

function Profilecard({users, getUserId}) {
    if(!users){
        return (<Spin size="large" className = 'lazyLoading'/>)
    }else{
    return (
        <div className="profilecard">
            {users.map((userInfo, index) => 
                <div class="card-container" key = {index}>
	{/* <span class="pro">PRO</span> */}
	{(() => {
  
  switch (userInfo.avatar) {
     case 'male1':
      return(<img class="round" src = {male1} alt="user" width="150px" height="150px"/>)
     case 'male2':
      return(<img class="round" src = {male2} alt="user" width="150px" height="150px"/>)
     case 'male3':
      return(<img class="round" src = {male3} alt="user" width="150px" height="150px"/>)
     case 'male4':
      return(<img class="round" src = {male4} alt="user" width="150px" height="150px"/>)
     case 'female1':
         return (
			<img class="round" src = {female1} alt="user" width="150px" height="150px"/>
         )
     case 'female2':
         return (
			<img class="round" src = {female2} alt="user" width="150px" height="150px"/>
         )
     case 'female3':
         return (
			<img class="round" src = {female3} alt="user" width="150px" height="150px"/>
         )
     case 'female4':
         return (
			<img class="round" src = {female4} alt="user" width="150px" height="150px"/>
         )
     default:
         return (
			<img class="round" src ={userInfo.gender === 'male' ? default_male : userInfo.gender === 'female' ? default_female : default_male}  width="150px" height="150px" />
         )
  }

})()}
	<h3 className='text'>{userInfo.username}</h3>
	<h3 className='text'>{userInfo.fullname}</h3>
	{/* <h6 className='text'>{userInfo.email}</h6> */}
	<p>{userInfo.headline}</p>
	<div class="buttons">

        <Link to ='/visitprofile'>
		<button class="primary" onClick = { () => getUserId(userInfo._id)} style = {{cursor: 'pointer'}}>
			View
		</button>
            </Link>
		<button class="primary ghost">
			Following
		</button>
	</div>
	<div class="skills">
		<h6 className='text'>Intrests</h6>
		<ul>
			{userInfo.intrests.map((intrestsDataItem)=> <li>{intrestsDataItem}</li>)}
		</ul>
	</div>
</div>
            )}
        </div>
           
    )}
}

export default Profilecard
