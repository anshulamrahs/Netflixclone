import React from 'react'
import './watch.scss'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackIosOutlinedIcon/>
            Home
        </div>
        <video className='video' autoPlay progress controls src='https://video-links.b-cdn.net/media/videolinks/video/PrismFX.mp4'/>
    </div>
  )
}

export default Watch