import React, { useEffect, useState } from "react";
import "../styles/home.css";
import axios from "axios";
import suszoLogo from "../images/suszo_logo.png";
import { Button  } from 'antd';
import {LoginOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/search", { username: "adeeb0407" })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="home-main">
      <div className="home-heading">Welcome to SuSzo</div>
      <div className="home-logo">
        <img
          src={suszoLogo}
          height="70px"
          width="70px"
          style={{ padding: "5px" }}
        />
      </div>
      <div className="home-content">
        <p className="home-subheading">
          Get to Know What people Think of you, By not knowing who you are
          talking to
        </p>
        <p className="home-content-heading">What is SusZo?</p>
        <p className="home-info">
          SusZo is a SocialMedia Platform where people can come and
          Socilize/Interact as Strangers with the Users and at the same time the
          Users have their Privacy.
          <br />A place fir Introverts to Help reach their close ones and
          interact with them as 'Strangers'
        </p>
        <p className="home-content-heading">Want to Know what People think about You?</p>
        <p className="home-info">
         <ul>
             <li>Share Your Profile on Other SocialMeida Platforms using Profile URL</li>
             <li>Ask People to Write Replies on Your Profile to know What people think of you</li>
             <li>You can Reply to any Stranger's Reply Aswell m but only once per Message (Reply)</li>
             <li>Write Diries to keep Your Audience Up-To-Date with Your Life</li>
         </ul>
        <p>
            Join the Community and be a part of something Amazing!!
        </p>
        </p>
      </div>
      <Link to ='/register'>
      <Button type="primary" htmlType="submit" className="login-form-button register-buttton">
           <LoginOutlined />Register
        </Button>
        </Link>
    </div>
  );
}

export default Home;
