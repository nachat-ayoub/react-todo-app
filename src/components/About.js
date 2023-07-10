import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/About.css';

const About = () => {
  return (
    <div className='About__Container'>
      <div className='section'>
        <div className='info'>
          <div className='info_text'>
            <h1 className='title'>About This Project</h1>
            <p className='text'>
              This project was made just for practicing purposes and that's mean
              it's not a professional design layout at all have a look at the
              source code down below. <br /> and leave a star if you like.
            </p>
          </div>
          <div className='btns'>
            <a target='_blank' href='mailto:nachat.ayoub.freelancer@gmail.com'>
              <span>Contact me</span>
              <i className='las la-envelope'></i>
            </a>
            <Link
              target='_blank'
              rel='noreferrer'
              to='https://github.com/venomVV/react-todo-app'
            >
              <span>Source Code</span>
              <i className='lab la-github'></i>
            </Link>
          </div>
        </div>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/portfolio-storage-fde3c.appspot.com/o/images%2Fclip-reading-of-books-1.png_1643843484204?alt=media&token=becee5b9-26c6-4dc1-a237-8bb7cf92a9b7'
          alt='about image'
        />
      </div>
      <div className='section'>
        <h2>Technologies used in this project :</h2>
        <ul>
          <li>
            <span>
              <i className='lab la-react'></i>
            </span>
            React
          </li>
          <li>
            <span>
              <i className='lab la-react'></i>
            </span>
            Redux with redux toolkit
          </li>

          <li>
            <span>
              <i className='lab la-react'></i>
            </span>
            React hooks (useState, useEffect, useRef)
          </li>

          <li>
            <span>
              <i className='las la-database'></i>
            </span>
            Local Storage as a db
          </li>
          <li>
            <span>
              <i className='lab la-sass'></i>
            </span>
            Sass for styling
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
