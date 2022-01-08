import React from 'react';
import './Hero.css';
import source from '../../../images/source.svg';
import { Link } from 'react-router-dom';
const Hero = () => {

  return (
    <div className="background">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex  align-items-center bg ">
            <div className="a">
              <h1 className="fw-bold">
                WELCOME TO SHELTEK
                FIND YOUR DREAM HOUSE WITH US
              </h1>
              <p className="mt-3">
                Lorem consectetur adipiscing elit, sed do eiusmod tempor dolor sit amet
                contetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
              <Link to='/services'>
                <button className='codepickjs-btn'>PROPERTY</button>
              </Link>
              
            </div>
          </div>
          <div className="col-lg-6 bg d-flex justify-content-end align-items-center">
            <div className="banner-img">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;