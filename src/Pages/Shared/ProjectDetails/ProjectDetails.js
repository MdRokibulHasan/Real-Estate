import React from 'react';
import useProjectDetails from '../../../hooks/useProjectDetails';
import Footer from '../Footer/Footer/Footer';
import NavBar from '../Header/NavBar/NavBar';

const ProjectDetails = () => {
    const {projectDetails, spinner} = useProjectDetails()
    const {image, name, details, postDate, _id} = projectDetails;
    return (
        <div>
          <NavBar></NavBar>
           <div className="container mt-4">
              {
                spinner && <div class="d-flex justify-content-center">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            <h1 className="text-center">{name}</h1>
              <div className="text-center">
                <img  src={`data:image/png;base64,${image}`} alt="" />
              </div>
              <article>
                <h2>{name}</h2>
                <small>{postDate}</small>
                <p>{details}</p>

              </article>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default ProjectDetails;