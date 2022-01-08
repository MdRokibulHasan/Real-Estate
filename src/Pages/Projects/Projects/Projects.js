import React from 'react';
import { Link } from 'react-router-dom';
import useProjects from '../../../hooks/useProjects';
import Footer from '../../Shared/Footer/Footer/Footer';
import NavBar from '../../Shared/Header/NavBar/NavBar';
import Project from '../Project/Project';
import './Projects.css';
const Projects = () => {
    const {projects, spinner} = useProjects()

    return (
        <div>
            
            <NavBar></NavBar>
           <div className="container">
           <ul className="cards ">
            {
                spinner && <div class="d-flex justify-content-center">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
              {
                projects.map(project=> <Project
                key={project._id}
                project={project}
                ></Project>)
            }
            </ul>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;