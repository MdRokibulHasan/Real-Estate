import React from 'react';
import './HomeAboutSection.css';
import img from '../../../images/about-home.jpg'
import { Link } from 'react-router-dom';
function HomeAboutSection() {
    return (
        <div>
            <div className="container my-5">
                <div className="row ">
                    <div className="col-lg-6">
                        <div className="title-text mb-4">
                            <h1 className='m-0'>SOME WORD</h1>
                            <h1 className='fw-bold'>ABOUT SHELTEK</h1>
                        </div>
                        <div className="a">
                           <p className="text-color">
                           <Link className='text-decoration-none text-dark fw-bold' to="/about">
                           Sheltek
                            </Link> is the best theme for elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo.
                            <br />
                            Lorem is a dummy text do eiusmod tempor dolor sit amet, onsectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliqua Ut enim onsectetur
                            <br />
                            Lorem is a dummy text do eiusmod tempor dolor sit amet, onsectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliqua Ut enim onsectetur
                           </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-lg-flex justify-content-lg-end align-items-center">
                            <Link className='about-home-img d-flex justify-content-lg-end justify-content-center align-items-center' to="/about">
                                    <img src={img} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutSection
