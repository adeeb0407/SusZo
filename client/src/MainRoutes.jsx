import React, {useState} from 'react'
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
import DisplayBlogs from './components/blog/DisplayBlogs';
import MyBlogs from './components/blog/MyBlogs';
import SearchedUserBlog from './components/blog/SearchedUserBlog';
import VisitBlog from './components/blog/VisitBlog';
import InboxMain from './components/inbox/InboxMain';
import Settings from './components/settings/Settings';

function Main() {
    const dispatch = useDispatch()
    const [navShow, setNavShow] = useState(true);
    const navRemove = () => {
        const nav = document.querySelector(".navShow");
        setNavShow(!navShow);
        if (navShow) {
          nav.classList.remove("nav_remove_button");
        } else {
          nav.classList.remove("nav_show_button");
        }
      };
    return (
        <>
        <Navbar navShow = {navShow} setNavShow = {setNavShow}/>
        <div className = 'main' onClick={navRemove}>
        {/* <SideNavbar /> */}
        <div className='main_content_side'>
            <Routes>
            <Route exact path = '/' element = {<Home />} />
            <Route exact path = '/login' element = {<Login />} />
            <Route exact path = '/register' element = {<Register />} />
            <Route exact path = '/user' element = {<Finduser />} />
            <Route exact path = '/profile' element = {<Profile />} >
                <Route exact path = '/profile/mydiary' element = {<MyBlogs />} />
                <Route exact path = '/profile/inbox' element = {<InboxMain />} />
                <Route exact path = '/profile/settings' element = {<Settings />} />
            </Route>
            <Route exact path = '/edituserprofile' element = {<Editprofile />} />
            <Route exact path = '/visitprofile' element = {<VisitProfile />} >
                <Route exact path = '/visitprofile/diary' element = {<VisitBlog />} />
            </Route>
            <Route exact path = '/user/:username' element = {<ProfileByURL />} >
                 <Route exact path = '/user/:username/diary' element = {<SearchedUserBlog />} />
            </Route>
            <Route exact path = '/whatsnew' element = {<DisplayBlogs />} />
            <Route exact path = '/writeBlog' element = {<WriteBlog />} />
            <Route exact path = '/inbox' element = {<InboxMain />} />
            <Route exact path = '/settings' element = {<Settings />} />
            </Routes>
            </div>
        </div>
        </>
    )
}

export default Main
