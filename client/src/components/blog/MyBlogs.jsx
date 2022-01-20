import { useEffect, useState } from 'react'
import {fetchBlogByUser} from '../../actions/blog'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'antd';
import Parser from 'html-react-parser';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {Spin, Tabs} from 'antd';
import Typography from '@mui/material/Typography';
import moment from 'moment'
import {    
    DownOutlined,
    UpOutlined,
    BookOutlined
    }
 from '@ant-design/icons'

function MyBlogs() {
    const [expanded, setExpanded] = React.useState(false);

    const { TabPane } = Tabs;

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
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
        return (<Spin size="large" className = 'lazyLoading'/>)
    }else if (!user) {
        return (<Spin size="large" className = 'lazyLoading'/>)
    }else if (!profileBlogs) {
        return (<Spin size="large" className = 'lazyLoading'/>)
    }else{
    return (
      <>
                      <Tabs defaultActiveKey="2">
    <TabPane
    style = {{marginBottom : '20px'}}
      tab={
        <span>
         <BookOutlined />
          My Diaries
        </span>
      }
      key="1"
    >
    </TabPane>
    </Tabs>
        <div className="myblogs">
                <div>
                    {profileBlogs?.map((diary, index)=>
      <Accordion
        expanded={expanded === `panel${index+1}`}
        onChange={handleChange(`panel${index+1}`)}
      >
        <AccordionSummary
          expandIcon={<DownOutlined />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {diary.title}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
          {moment(diary.createdAt).format('MMMM Do YYYY')}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {Parser(diary.blogBody)}
          </Typography>
        </AccordionDetails>
      </Accordion>
                    ).reverse()}
    </div>
        </div>
        </>
        
    
    )
                    }
}



export default MyBlogs
