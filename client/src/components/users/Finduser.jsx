import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsers} from '../../actions/getUsers'
import Profilecard from './Profilecard';

function Finduser() {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchUsers());
    }, [])

    const users = useSelector(state => state.users)
    return (
        <div>
            <Profilecard users = {users} />
        </div>
    )
}

export default Finduser
