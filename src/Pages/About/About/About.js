import React from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import NavBar from '../../Shared/Header/NavBar/NavBar';
import code from '../../../images/maruf-hero.png';
import Agents from '../Agents/Agents';
import TopHeader from '../../Shared/Header/TopHeader/TopHeader';
const About = () => {
    return (
        <div>
              <TopHeader></TopHeader>
            <NavBar></NavBar>
            <div class="about-sheltek-area mt-5 ptb-115">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-12 mt-5 order-md-2">
                            <div class="section-title mb-30">
                                <h2>ABOUT SHELTEK</h2>
                            </div>
                            <div class="about-sheltek-info">
                                <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" class="tooltip-content">Sheltek</span> is the best theme for elit, sed do
                                    eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo.</p>
                                <p>Lorem is a dummy text do eiusmod tempor dolor sit amet, onsectetur adip iscing elit,
                                    sed do eiusmod tempor incididunt ut labore et lorna aliqua Ut enim onsectetur </p>
                            </div>
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="about-image">
                                <img src="https://i.ibb.co/fSwB9LX/aboutus.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Agents></Agents>
            </div>

            {/* <div className="container">
                <h1 className="text-center">About US</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <img className='w-100' src={code} alt="" />
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="a">
                            <p>
                                We will try to explain the difficult problems easily.So let's grow some coding knowledge in simple way
                            </p>
                            <div className="text-center">
                                <button className="codepickjs-btn w-50">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <Footer></Footer>
        </div>
    );
};

export default About;