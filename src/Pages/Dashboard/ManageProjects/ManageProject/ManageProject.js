import React from 'react';

const ManageProject = ({project}) => {
    const {image, name, details, postDate} = project;
    console.log(name);
    return (
        <div className="col ">
        <div style={{backgroundColor:'#0F0826'}} className="card">
          <img style={{}} src={`data:image/png;base64,${image}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title ">{name}</h5>
            <p className="card-text ">{details.slice(0, 60)}...</p>
            <p className="card-text ">{postDate}</p>
          </div>
          <div className="card-footer">
              <button className="codepickjs-btn w-100">Delete</button>
          </div>
        </div>
      </div>
    );
};

export default ManageProject;