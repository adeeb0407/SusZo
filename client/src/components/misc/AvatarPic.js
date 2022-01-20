import React, {useState} from 'react'
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

function Avatar({profileData}) {
    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')))
    return (
        <div>
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
          <img src ={profileData.gender === 'male' ? default_male : profileData.gender === 'female' ? default_female : default_male}  width="200px" />
         )
  }

})()}
        </div>
    )
}

export default Avatar
