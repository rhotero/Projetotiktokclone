import React, { useState } from 'react'
import "./videoSidebar.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({likes, messages, shares}) {

    const [liked, setLiked] = useState (false)

    function handdleLike() {
            setLiked(!liked)
    }


  return (
    <div className='videoSidebar'>
        <div 
        className='videoSidebar_options'
        onClick={handdleLike}
        >
            { liked ? <FavoriteOutlinedIcon fontSize='large'/> : <FavoriteBorderOutlinedIcon fontSize='large'/>}
        
        <p>{ liked ? likes + 1 : likes }</p>
        </div>
        <div className='videoSidebar_options'>
        <ChatIcon fontSize='large'/>
        <p>{messages}</p>
        </div>
        <div className='videoSidebar_options'>
        <ShareIcon fontSize='large'/>
        <p>{shares}</p>
        </div>
        </div>
  )
}

export default VideoSidebar