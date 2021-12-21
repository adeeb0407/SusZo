import React from 'react'
import {reduxActionTemplate} from './actions/userActions'
import {useDispatch, useSelector} from 'react-redux'
import 'antd/dist/antd.css';
import "animate.css/animate.min.css";
import './styles/main.css'
import {Routes , Route} from 'react-router-dom'

import Home from './components/Home'
import SideNavbar from './components/SideNavbar'
import Navbar from './components/Navbar'
import Login from './components/authentication/login/Login'
import Register from './components/authentication/register/Register'
import Finduser from './components/users/Finduser';
import Profile from './components/profile/Profile';
import Editprofile from './components/editUserProfile/Editprofile';
import VisitProfile from './components/profile/VisitProfile';
import ProfileByURL from './components/profile/ProfileByURL';
import WriteBlog from './components/blog/WriteBlog';

function Main() {
    const dispatch = useDispatch()
    return (
        <>
        <Navbar />
        <div className = 'main'>
        <SideNavbar />
        <div className='main_content_side'>
            <Routes>
            <Route exact path = '/' element = {<Home />} />
            <Route exact path = '/login' element = {<Login />} />
            <Route exact path = '/register' element = {<Register />} />
            <Route exact path = '/user' element = {<Finduser />} />
            <Route exact path = '/profile' element = {<Profile />} />
            <Route exact path = '/edituserprofile' element = {<Editprofile />} />
            <Route exact path = '/visitprofile' element = {<VisitProfile />} />
            <Route exact path = '/user/:username' element = {<ProfileByURL />} />
            <Route exact path = '/writeBlog' element = {<WriteBlog />} />
            </Routes>
            </div>
        </div>
        </>
    )
}

export default Main
