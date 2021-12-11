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

function Main() {
    const dispatch = useDispatch()
    dispatch(reduxActionTemplate(5))
    const reduxSelector = useSelector(state => state.reduxTemplate)
    console.log(reduxSelector)

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
            </Routes>
            </div>
        </div>
        </>
    )
}

export default Main
