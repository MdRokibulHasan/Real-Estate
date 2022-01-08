import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../images/logo.png';
const Login = ({handleClosel}) => {
  const { register, handleSubmit } = useForm();
 const location = useLocation();
  const navigate = useNavigate();
  
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
  const onSubmit = data => {
    loginUser(data.email, data.password, location, navigate, handleClosel);
   
  };
  const handelgoogleSingin = () => {
    signInWithGoogle(location, navigate);
  }
  return (
    <div>
      <div className="a">
        <div className="text-center mt-lg-3">
        <img src={logo} alt="" />
        </div>
        <h3 className="text-center fw-bolder my-lg-3">
          Log In {authError}
        </h3>
        <div className="  d-flex justify-content-center">
          <div className="">
           <div className="a">
           <form onSubmit={handleSubmit(onSubmit)}>
             <label htmlFor="">Email : </label>
              <input type="email" {...register("email")} />
              <label htmlFor="">Password : </label>
              <input type="password" {...register("password")} />

              <div className="a">
                <button className="codepickjs-btn w-100">Log in</button>
              </div>
              <button className="btn border fs-5 w-100 mt-4" onClick={handelgoogleSingin}><i class="fab fa-google-plus-g"></i> Log In with Google</button>
            </form>
            <p className='text-center mt-3'>Don't have an account ? <Link to="/register">Register Now</Link></p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;