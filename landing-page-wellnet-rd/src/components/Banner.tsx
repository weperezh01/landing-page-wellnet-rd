import React from 'react';
import bannerImage from '../resoucers/img/networking_banner.jpg';
import '../styles/Banner.css'

function Banner() {
  return (
    <div id='banner_image' className='banner_image'>
        <img id= "banner_image_id" src={bannerImage}/>
    </div>
  )
}

export default Banner;