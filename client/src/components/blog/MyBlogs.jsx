import React from 'react'
import { useEffect, useState } from 'react'
import {fetchBlogByUser} from '../../actions/blog'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'antd';
import Parser from 'html-react-parser';

function MyBlogs() {
    const dispatch = useDispatch()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const profileData = useSelector((state) => state.userById)

    const profileBlogs = useSelector(state => state.diary)
    console.log(profileBlogs)

    useEffect(() => {
        if(user !== null){
        dispatch(fetchBlogByUser(user.response.id))
        return;
    }
    }, [])

    if(profileBlogs === ''){
        return(<h4>Only Registred users can view diaries</h4>)
    }else if (!user) {
        return (<h1>Loading</h1>)
    }else{
    return (
        <div className="myblogs">
            {profileBlogs?.map((diary)=> 
                <div className="site-card-border-less-wrapper blogAligniment">
    <Card title={diary.title} bordered={false} style={{ width: 300 }}>
    <div>
    {Parser(diary.blogBody)}
        {/* {diary.blogBody} */}
    </div>
    </Card>
  </div>
            ).reverse()}
        </div>
    )}
}

export default MyBlogs
