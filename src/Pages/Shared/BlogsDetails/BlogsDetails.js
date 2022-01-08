import React from 'react';
import useBlogsDetails from '../../../hooks/useBlogsDetails';
import Footer from '../Footer/Footer/Footer';
import NavBar from '../Header/NavBar/NavBar';

const BlogsDetails = () => {
    const {blogDetails, spinner} = useBlogsDetails();
    const {name, details, postDate, image} = blogDetails;
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <h1 className='text-center my-5'>{name}</h1>
                <div className="text-center my-5">
                    <img  style={{maxWidth:'400px'}} src={`data:image/png;base64,${image}`} alt="" />
                </div>
                <article>
                    <h2>{name}</h2>
                    <p>{details}</p>
                </article>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BlogsDetails;