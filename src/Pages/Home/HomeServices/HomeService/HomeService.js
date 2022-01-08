import React from 'react';
import { Link } from 'react-router-dom';

const HomeService = ({service}) => {
    const {p_name,Area,Bedroom,Bathroom,Garage,Kitchen,Price,image,description, _id,imageupload, location} = service;
    return (
        <div className="col">
        <Link to={`/services/${_id}`} className='text-decoration-none text-dark'>
        <div className="card h-100">
       <div className="imgcontainer">
       <div className='serviceimg'>
        {
                imageupload ? <img src={`data:image/png;base64,${imageupload}`} className="card-img-top" alt="..." />:<img src={image} className="card-img-top" alt="..." />
            }
        </div>
       </div>
            
            <div className="information">
          <div className=" d-flex justify-content-between mx-5 fs-3 text-light">
              <div className="box">
              <i class="fas fa-square-full me-1"></i>
              <small>{Area} sqft</small>
              </div>
              <div className="box">
              <i class="fas fa-bed me-1"></i>
              <small>{Bedroom}</small>
              </div>
              <div className="box">
              <i class="fas fa-bed me-1"></i>
              <small>{Bathroom}</small>
              </div>
          </div>
          </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                <h5 className="card-title">{p_name}</h5>
                <h5 className="card-title">${Price}</h5>
                </div>
                <small className="card-text"><i class="fas fa-map-marker-alt me-1"></i>{location}</small>
            </div>
        </div>
        </Link>
    </div>
    );
};

export default HomeService;