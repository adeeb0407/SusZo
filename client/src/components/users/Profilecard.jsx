import React from 'react'
import '../../styles/usercard.css'
import girl from '../../images/female.png'
import boy from '../../images/male.png'
import other from '../../images/male.png'

function Profilecard({users}) {
    console.log(users)
    return (
        <div className="profilecard">
            {users.map((userInfo, index) => 
                <div class="card-container" key = {index}>
	{/* <span class="pro">PRO</span> */}
	<img class="round" src = {userInfo.gender === 'male' ?boy : userInfo.gender === 'female'? girl : other} alt="user" width="150px" height="150px"/>
	<h3 className='text'>{userInfo.username}</h3>
	<h3 className='text'>{userInfo.fullname}</h3>
	{/* <h6 className='text'>{userInfo.email}</h6> */}
	<p>User interface designer and <br/> front-end developer</p>
	<div class="buttons">
		<button class="primary">
			Message
		</button>
		<button class="primary ghost">
			Following
		</button>
	</div>
	<div class="skills">
		<h6 className='text'>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
</div>
            )}
        </div>
           
    )
}

export default Profilecard
