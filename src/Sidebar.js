import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'

function Sidebar() {
  const user = useSelector(selectUser);

    const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
    <span className='sidebar__hash'>#</span>
    <p>{topic}</p>
</div>)
        


  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://images.unsplash.com/photo-1668694504921-5bcf11d34eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
            </div>
            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                <p>who viewed you</p>
                <p className='sidebar__statNumber'>2,543</p>
                </div>
                <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2,543</p>
                </div>
            </div>
            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("dsa")}
                {recentItem("programming")}
                {recentItem("angular")}
                {recentItem("javascript")}
            </div>
    </div>
  )
}

export default Sidebar