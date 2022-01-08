import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../images/logo.png';
const Register = ({handleCloser}) => {
     const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        registerUser(data.email, data.password, data.name, navigate, handleCloser);
        
      };
    return (
        <div>
        <div className="a">
          <div className="text-center mt-lg-3">
          <img src={logo} alt="" />
          </div>
          <h3 className="text-center fw-bolder my-lg-3">
          Register Now
            {authError}
          </h3>
          <div className="  d-flex justify-content-center">
            <div className="">
             <div className="a">
             <form onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="">Name : </label>
                <input type="text" {...register("name")} />
               <label htmlFor="">Email : </label>
                <input type="email" {...register("email")} />
                <label htmlFor="">Password : </label>
                <input type="password" {...register("password")} />
  
                <div className="a">
                  <button className="codepickjs-btn w-100">Register</button>
                </div>
              </form>
              <p className='text-center mt-3'>Already have an account ? <Link to="/login">Log in Now</Link></p>
             </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;