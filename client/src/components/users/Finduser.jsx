import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsers, captureId} from '../../actions/getUsers'
import {Spin } from 'antd';
import Profilecard from './Profilecard';

function Finduser() {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchUsers());
    }, [dispatch])
    const getUserId = (id) => {
    dispatch(captureId(id))
    }

    const users = useSelector(state => state.users)
    console.log(users)
    if(!users){
        return (<Spin size="large" className = 'lazyLoading'/>)
    }else{
    return (
        <div>
            <Profilecard users = {users} getUserId = {getUserId}/>
        </div>
    )}
}

export default Finduser
