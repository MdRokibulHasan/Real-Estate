import React from 'react';
import { Link } from 'react-router-dom';

const HomeBlog = ({ blog }) => {
    const { name, details, image, _id } = blog;
    return (
        <div class="col">
            <div class="card mb-3 text-dark">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={`data:image/png;base64,${image}`} class="img-fluid rounded-start w-100" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{details.slice(0,120)}</p>
                            <Link to={`/blogs/${_id}`} class="card-text text-decoration-none"><small class=" codepickjs-btn">Read More</small></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBlog;