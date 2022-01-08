import React from 'react';
import useProjects from '../../../hooks/useProjects';
import HomeProject from '../HomeProject/HomeProject';
import './HomeProjects.css'
const HomeProjects = () => {
    const {projects, spinner} = useProjects()
    return (
    <div className="container">
      
      <ul className="cards">
             {
                spinner && <div class="d-flex justify-content-center">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
              {
                projects.map(project=> <HomeProject
                key={project._id}
                project={project}
                ></HomeProject>)
            }
            </ul>
    </div>
       
    );
};

export default HomeProjects;