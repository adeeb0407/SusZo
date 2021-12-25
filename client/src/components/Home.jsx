import React,{useEffect, useState} from 'react'
import '../styles/home.css'
import axios from 'axios'

function Home() {

    useEffect(()=> {
        axios.get('http://localhost:5000/user/search', {username : 'adeeb0407'})
        .then((res) => {
            console.log(res.data)
        }).catch(error => console.error(error))
    },[])
    return (
        <div className = 'home'>
            Home
        </div>
    )
}

export default Home
