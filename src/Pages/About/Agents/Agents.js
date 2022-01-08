import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleAgent from '../SingleAgent/SingleAgent';

const Agent = () => {
    const agents = [
        {
            "id": "1",
            "name": "Shah M Nawaz",
            "title": "Real Estate Agent",
            "image": "https://i.ibb.co/Zx4sPVt/Shah-MNawaz.jpg"
        },
        {
            "id": "2",
            "name": "Eva Sharlin",
            "title": "Real Estate Broker",
            "image": "https://i.ibb.co/3p2wfTq/Eva-Sharlin.jpg"
        },
        {
            "id": "3",
            "name": "Robin Patrick",
            "title": "Real Estate Broker",
            "image": "https://i.ibb.co/h2G8mLy/Robin-Patrick.jpg"
        },
        {
            "id": "4",
            "name": "Sarmin Tabassum",
            "title": "Real Estate Agent",
            "image": "https://i.ibb.co/Z21SqWT/Sarmin-Tabassum.jpg"
        }
    ]
    return (
        <div className="container my-5 text-center">
            <h3 className="mb-4">Our Agents</h3>
            <p className="mb-4">Sheltek is the best theme for elit, sed do eiusmod tempor dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud</p>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    agents.map(agent => <SingleAgent agent={agent}></SingleAgent>)
                }
            </div>

            <div className="text-center my-5">
                <Link to="agents">
                    <button className="btn btn-dark">See Our Agents</button>
                </Link>
            </div>

        </div>
        // <div class="our-agents-area pt-115 pb-55">
        //     <div class="container">
        //         <div class="row">
        //             <div class="col-md-12">
        //                 <div class="section-title-2 text-center">
        //                     <h2>OUR AGENTS</h2>
        //                     <p>Sheltek is the best theme for elit, sed do eiusmod tempor dolor sit amet, conse
        //                         ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd
        //                         minim veniam, quis nostrud</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="row">
        //             <div class="col-12">
        //                 <div class="agents-carousel">
        //                     <div class="col">
        //                         <div class="single-agent">
        //                             <div class="agent-image">

        //                             </div>
        //                             <div class="agent-info">
        //                                 <div class="agent-name">
        //                                     <h5><a href="agent-details.html">Shah M Nawaz</a></h5>
        //                                     <p>Real Estate Agent</p>
        //                                 </div>
        //                             </div>
        //                             <div class="agent-info-hover">
        //                                 <div class="agent-name">
        //                                     <h5><a href="agent-details.html">Shah M Nawaz</a></h5>
        //                                     <p>Real Estate Agent</p>
        //                                 </div>
        //                                 <ul class="agent-address">
        //                                     <li></li>
        //                                     <li></li>
        //                                 </ul>
        //                                 <ul class="social-media">
        //                                     {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
        //                                     </li> */}
        //                                 </ul>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col">
        //                         <div class="single-agent">
        //                             <div class="agent-image">

        //                             </div>
        //                             <div class="agent-info">
        //                                 <div class="agent-name">
        //                                     <h5><a href="agent-details.html">Eva Sharlin</a></h5>
        //                                     <p>Real Estate Broker</p>
        //                                 </div>
        //                             </div>
        //                             <div class="agent-info-hover">
        //                                 <div class="agent-name">
        //                                     <h5><a href="agent-details.html">Eva Sharlin</a></h5>
        //                                     <p>Real Estate Broker</p>
        //                                 </div>
        //                                 <ul class="agent-address">
        //                                     {/* <li><img src="images/icons/phone-2.png" alt="">+1245 785 659 </li> */}
        //                                     {/* <li><img src="images/icons/mail-close.png" alt="">eva@gmail.com
        //                                     </li> */}
        //                                 </ul>
        //                                 <ul class="social-media">
        //                                     {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
        //                                     </li> */}
        //                                 </ul>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col">
        //                         <div class="single-agent">
        //                             <div class="agent-image">
        //                                 {/* <img src="images/agents/3.jpg" alt=""> */}
        //                             </div>
        //                             <div class="agent-info">
        //                                 <div class="agent-name">
        //                                     <h5><a href="agent-details.html">Robin Patrick</a></h5>
        //                                     <p>Real Estate Broker</p>
        //                                 </div>
        //                             </div>
        //                             <div class="agent-info-hover">
        //                                 <div class="agent-name">
        //                                     <h5><a href="agent-details.html">Robin Patrick</a></h5>
        //                                     <p>Real Estate Broker</p>
        //                                 </div>
        //                                 <ul class="agent-address">
        //                                     {/* <li><img src="images/icons/phone-2.png" alt="">+1245 785 659 </li> */}
        //                                     {/* <li><img src="images/icons/mail-close.png" alt="">eva@gmail.com
        //                                     </li> */}
        //                                 </ul>
        //                                 <ul class="social-media">
        //                                     {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
        //                                     </li> */}
        //                                 </ul>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col">
        //                         <div class="single-agent">
        //                             <div class="agent-image">
        //                                 {/* <img src="images/agents/4.jpg" alt=""> */}
        //                             </div>
        //                             <div class="agent-info">
        //                                 <div class="agent-name">
        //                                     <h5><a href="agent-details.html">Sarmin Tabassum</a></h5>
        //                                     <p>Real Estate Agent</p>
        //                                 </div>
        //                             </div>
        //                             <div class="agent-info-hover">
        //                                 <div class="agent-name">
        //                                     <h5><a href="agent-details.html">Sarmin Tabassum</a></h5>
        //                                     <p>Real Estate Agent</p>
        //                                 </div>
        //                                 <ul class="agent-address">
        //                                     {/* <li><img src="images/icons/phone-2.png" alt="">+1245 785 659 </li> */}
        //                                     {/* <li><img src="images/icons/mail-close.png" alt="">eva@gmail.com
        //                                     </li> */}
        //                                 </ul>
        //                                 <ul class="social-media">
        //                                     {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
        //                                     </li> */}
        //                                 </ul>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col">
        //                         <div class="single-agent">
        //                             <div class="agent-image">
        //                                 {/* <img src="images/agents/3.jpg" alt=""> */}
        //                             </div>
        //                             <div class="agent-info">
        //                                 <div class="agent-name">
        //                                     <h5><a href="agent-details.html">Robin Patrick</a></h5>
        //                                     <p>Real Estate Broker</p>
        //                                 </div>
        //                             </div>
        //                             <div class="agent-info-hover">
        //                                 <div class="agent-name">
        //                                     <h5><a href="agent-details.html">Robin Patrick</a></h5>
        //                                     <p>Real Estate Broker</p>
        //                                 </div>
        //                                 <ul class="agent-address">
        //                                     {/* <li><img src="images/icons/phone-2.png" alt="">+1245 785 659 </li> */}
        //                                     {/* <li><img src="images/icons/mail-close.png" alt="">eva@gmail.com
        //                                     </li> */}
        //                                 </ul>
        //                                 <ul class="social-media">
        //                                     {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        //                                     </li>
        //                                     <li><a href=" "><i class="fa fa-google-plus" aria-hidden="true"></i></a>
        //                                     </li> */}
        //                                 </ul>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Agent;