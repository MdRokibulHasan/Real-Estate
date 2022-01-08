import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const {image, name, details, _id} = project;

    return (
        <div>
            <li>
        <Link to={`/projects/${_id}`} className="cardc">
    
            <img  src={`data:image/png;base64,${image}`} className="card__image" alt="" />
            <div className="card__overlay">
                <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000">
                        <path />
                    </svg>
                    <img className="card__thumb" src="https://i.ibb.co/Tc6nXyb/259779144-1182962145565997-6891498946233206818-n-1.png" alt="" />
                    <div className="card__header-text">
                        <h3 className="card__title">CodePick JS</h3>
                        <span className="card__status">1 hour ago</span>
                    </div>
                </div>
                <p className="card__description">{details}</p>
                
            </div>
        </Link>
    </li>
    
        </div>
    );
};

export default Project;