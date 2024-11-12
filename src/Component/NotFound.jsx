// src/components/NotFound.js
import React from 'react';
import Breatcamp from '../comman/Breatcamp';
import img1 from '../assets/404-error.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (<>
  <Breatcamp page="Not Found"/>

  <div class="service-area-6 space overflow-hidden  text-center">
        <img src={img1} alt="" />
        <h3>404 - Page Not Found</h3>
        <p class="text-center">Sorry, the page you're looking for does not exist.</p>
        
        <Link class="btn style2 style-r0" to="/"> Back To Home<i class="fas fa-angle-double-right"></i></Link>
      </div>

   
  </>
  );
};

export default NotFound;
