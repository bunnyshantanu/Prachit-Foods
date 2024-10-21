import React from 'react'
import LogoImage from "../assets/logo12.png";

export default function Preloader() {
  return (
    <div className='preloader'>
         <div class="preloader-inner">
            <img src={LogoImage} alt="" />
            <span class="loader"></span>
        </div>
    </div>
  )
}
