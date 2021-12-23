import React, {useState, useEffect} from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import Editor from './Editor'
import {postReply} from '../../actions/replies'
import {fetchUsersById} from '../../actions/getUsers'
import {useDispatch} from 'react-redux'

function WriteReply({id}) {
  const dispatch = useDispatch()
    const [replyData, setReplyData] = useState({
        reply : '',
        userId : id
    })

 useEffect(() => {

 },[Comment])
    const handleCommentChange = (e) => {
        const {name, value} = e.target
        setReplyData({...replyData, reply: e.target.value})
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        console.log(replyData)
        dispatch(postReply(replyData, id))
        dispatch(fetchUsersById(id));
        setReplyData({...replyData, reply: ''})
    }
    return (
        <div className = 'replies mainadjust'>
          <Comment
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
              <Editor
              
                onChange={handleCommentChange}
                onSubmit={handleCommentSubmit}
                name = 'comment'
                value = {replyData.reply}
              />
                }
            />
        </div>
    )
}

export default WriteReply
