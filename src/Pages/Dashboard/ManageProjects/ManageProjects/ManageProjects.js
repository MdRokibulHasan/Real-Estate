import React from 'react';
import useProjects from '../../../../hooks/useProjects';
import ManageProject from '../ManageProject/ManageProject';

const ManageProjects = () => {
    const { projects, spinner } = useProjects();
    return (
        <div>
            {
                spinner && <div class="d-flex justify-content-center">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            <div class="row row-cols-1 row-cols-md-3 g-4">


                {
                    projects.map(project => <ManageProject
                        key={project._id}
                        project={project}
                    ></ManageProject>)
                }

            </div>
        </div>
    );
};

export default ManageProjects;