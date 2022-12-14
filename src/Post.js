import  ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import  SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import  ShareOutlinedIcon  from '@mui/icons-material/ShareOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Avatar } from '@mui/material';
import React , {forwardRef} from 'react';
import InputOption from './InputOption';
import './Post.css';


const Post =forwardRef( ({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
      
      <div clssName='post__header '>
        <div className='post__avatar'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        </div>
       
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
          
        </div>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>
      <div className='post__button'>
      <InputOption Icon={ThumbUpAltOutlinedIcon}
       title="Like" color='gray'/>
       <InputOption Icon={ChatOutlinedIcon}
       title="Comment" color='gray'/>
       <InputOption Icon={ShareOutlinedIcon}
       title="Share" color='gray'/>
       <InputOption Icon={SendOutlinedIcon}
       title="Send" color='gray'/>
      </div>
    </div>
  )
})

export default Post