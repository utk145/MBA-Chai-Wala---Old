import React from 'react'
import introVideo from '../assets/MBA Chai Wala.mp4';



const IntoBannerVideo = () => {
  return (
    <div className='intro'>
        <video src={introVideo} muted autoPlay loop controlsList='nodownload'></video>
        <div></div> {/* This div will be used as an overlay. Thats the hack to stop videos from getting downloaded. */}
    </div>
  )
}

export default IntoBannerVideo