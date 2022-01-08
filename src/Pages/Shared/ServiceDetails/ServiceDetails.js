import React, { useEffect, useState } from 'react';
import useServiceDetails from '../../../hooks/useServiceDetails';
import Footer from '../Footer/Footer/Footer';
import NavBar from '../Header/NavBar/NavBar';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Reviewbox from './Reviewbox';
const ServiceDetails = () => {
  const { serviceDetails, spinner } = useServiceDetails();
  const { p_name, Area, Bedroom, Bathroom, Garage, Kitchen, Price, image, description, _id, imageupload, location } = serviceDetails;

  const { user } = useAuth()
  const [date, setDate] = useState(new Date());
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const currentDate = day + '-' + month + '-' + year;
  const [defaultValue, setDefaultValue] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    fetch('https://agile-atoll-48938.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Order Done')
          reset()
        }

      });
  };
  useEffect(() => {
    setDefaultValue({ email: user.email, photo: user.photoURL, id: _id, orderStatus: 'Pending', price: Price, image: image, imageupload: imageupload, orderDate: currentDate })
  }, [_id]);
  useEffect(() => {
    reset(defaultValue)
  }, [defaultValue]);


  const [reviews, setReview] = useState();
  const handelcomment = (e) => {
    setReview(e.target.value);
    e.target.value = ''
  }

  const handelsendcomment = (e) => {
    e.preventDefault()
    console.log(reviews);
    const userreview = {
      id: _id,
      review: reviews,
      profile: user.photoURL,
      reviewer: user.displayName
    }
    fetch('https://agile-atoll-48938.herokuapp.com/userreview', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userreview)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Order Done')
        }
      });
  }
  const [userreviews, setUserreviews] = useState();
  useEffect(() => {
    fetch(`https://agile-atoll-48938.herokuapp.com/userreview/${_id}`)
      .then(res => res.json())
      .then(data => setUserreviews(data))
  }, [userreviews])

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
        <div className="row">
          <div className="col-lg-8">
            <h1 className="text-center">{p_name}</h1>
            <div className="text-center my-3">
              {
                imageupload ? <img src={`data:image/png;base64,${image}`} alt="" /> : <img src={image} alt="" />
              }
            </div>
            <article className='mt-5'>
              <h3>{p_name}</h3>
              <h4>Minimum Price : {Price}$</h4>
              <div className="row my-3 border border-4 p-lg-3 bordar-secondery">
                <div className="col-lg-6">
                  <div className=" fs-4">
                    <div className="box">
                      <i class="fas fa-square-full me-1"></i>
                      <small>Area : {Area} sqft</small>
                    </div>
                    <div className="box">
                      <i class="fas fa-bed me-1"></i>
                      <small>Bedroom : {Bedroom}</small>
                    </div>
                    <div className="box">
                      <i class="fas fa-bath"></i>
                      <small>Bathroom : {Bathroom}</small>
                    </div>
                  </div>
                </div>


                <div className="col-lg-6">
                  <div className=" fs-4">
                    <div className="box">
                      <i class="fas fa-warehouse me-1"></i>
                      <small>Garage : {Garage}</small>
                    </div>
                    <div className="box">
                      <i class="fas fa-sink me-1"></i>
                      <small>Kitchen : {Bedroom}</small>
                    </div>
                    <div className="box">
                      <i class="fas fa-map-marker-alt me-1"></i>
                      <small>Location{Bathroom}</small>
                    </div>
                  </div>
                </div>
              </div>

              <p> {description}</p>
            </article>

            <div className="a">
              <form>
                <label htmlFor="comment">Write a review</label>
                <input id='comment' onBlur={handelcomment} placeholder='Write a reviews' type="text" />
                <div className="">
                  <button onClick={handelsendcomment} className='codepickjs-btn '>Send</button>
                </div>
              </form>

            </div>
            <div className="my-5">
              <h4>All Reviews</h4>

              <div className="a">
              
              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <h1 className='text-center'>Rent This House</h1>
            <div className="a">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name :</label>
                <input defaultValue={user.displayName} {...register("username")} type="text" />
                <label htmlFor="name">Email :</label>
                <input defaultValue={user.email} {...register("email")} type="email" />
                <label htmlFor="name">Project Name :</label>
                <input defaultValue={p_name} {...register("projectname")} type="text" />

                <div className="text-center">
                  <button className='codepickjs-btn w-100' type='submit'>Pre Rent Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;