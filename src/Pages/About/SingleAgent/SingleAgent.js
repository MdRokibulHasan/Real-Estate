import React from 'react';
import './SingleAgent.css'
import { Link } from 'react-router-dom';

const SingleAgent = (props) => {
    const name = props.agent.hasOwnProperty('name') ? props.agent.name : null;
    const image = props.agent.hasOwnProperty('image') ? props.agent.image : null;
    const title = props.agent.hasOwnProperty('title') ? props.agent.title : null;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} alt={title} className="card-img-top h-50" />
                <div className="card-body text-secondary">
                    <h4 className="card-title">{name}</h4>
                    <h6 className="card-title">{title}</h6>
                </div>
                <div className="card-footer text-center">
                    <div className="social-links mt-3">
                        <a href=" "><i class="far fa-envelope"></i></a>
                        <a href=" "><i className="fab fa-facebook-f"></i></a>
                        <a href=" "><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAgent;