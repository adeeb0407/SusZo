import React from 'react'
import { useEffect, useState } from 'react'
import {fetchBlogByUser} from '../../actions/blog'
import { useSelector, useDispatch } from 'react-redux'
import Parser from 'html-react-parser';
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
import {Tabs, Spin} from "antd";
import { useNavigate, useLocation} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { 
    HeartFilled ,
    ShareAltOutlined,
    DownCircleFilled,
    FileWordOutlined

}from '@ant-design/icons';
import dateFormat, { masks } from "dateformat";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function VisitBlog() {

    const [expanded, setExpanded] = React.useState(false);
    const { TabPane } = Tabs;
    const navigate = useNavigate()

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


    const dispatch = useDispatch()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const id = useSelector((state) => state.id)

    const profileBlogs = useSelector(state => state.diary)

    useEffect(() => {
        if(user !== null){
        dispatch(fetchBlogByUser(id))
        return;
        }
    }, [])

    if(profileBlogs === ''){
        return(<h4>Only Registred users can view diaries</h4>)
    }else if (!user) {
        return (<h1>Loading</h1>)
    }else{
    return (
        <>
        <Tabs defaultActiveKey="2">
    <TabPane
    style = {{marginBottom : '20px'}}
      tab={
        <span>
          <FileWordOutlined />
            {`Diaries`}
        </span>
      }
      key="1"
    >
    </TabPane>
    </Tabs>
        <div className="displayBlog">
        {profileBlogs?.map((blogItem, index)=> 
            <Card sx={{ maxWidth: 545 }} className='blogPer'>
            {blogItem.userDetails.map((userItem) => 
        <CardHeader style = {{cursor : 'pointer'}} onClick = {() => navigate(`/user/${userItem.username}`)}
          avatar={
            (() => {
  
  switch (userItem?.avatar) {
     case 'male1':
      return(<Avatar aria-label="recipe"  src = {male1}/>)
     case 'male2':
      return(<Avatar aria-label="recipe"  src = {male2}/>)
     case 'male3':
      return(<Avatar aria-label="recipe"  src = {male3}/>)
     case 'male4':
      return(<Avatar aria-label="recipe"  src = {male4}/>)
     case 'female1':
         return (
            <Avatar aria-label="recipe"  src = {female1}/>
         )
     case 'female2':
         return (
            <Avatar aria-label="recipe"  src = {female2}/>
         )
     case 'female3':
         return (
            <Avatar aria-label="recipe"  src = {female3}/>
         )
     case 'female4':
         return (
            <Avatar aria-label="recipe"  src = {female4}/>
         )
     default:
         return (
            <Avatar aria-label="recipe" src = {default_male}/>
         )
    }
})()
            // <Avatar aria-label="recipe"  src = {male1}/>
          }
          
          action={
            <IconButton aria-label="settings">
            </IconButton>
          }
          title={userItem.username}
          subheader= {dateFormat(blogItem.createdAt, "dddd, mmmm dS, yyyy")}
        />
            )}
        <Typography variant="h5" style = {{marginLeft: '15px'}}>
        {blogItem.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {blogItem.snippet}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <HeartFilled />
          </IconButton>
          <IconButton aria-label="share">
            <ShareAltOutlined />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <DownCircleFilled />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph >
            {Parser(blogItem.blogBody)}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
        )}
      </div>
      </>
    )}
}

export default VisitBlog
