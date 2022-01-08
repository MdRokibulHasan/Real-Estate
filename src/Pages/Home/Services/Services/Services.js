import React from 'react';
import useServices from '../../../../hooks/useServices';
import Footer from '../../../Shared/Footer/Footer/Footer';
import NavBar from '../../../Shared/Header/NavBar/NavBar';
import TopHeader from '../../../Shared/Header/TopHeader/TopHeader';
import Service from '../Service/Service';

const Services = () => {
    const { services, spinner } = useServices()
    return (
        <div>
         <TopHeader></TopHeader>
            <div className="sticky-top">
            <NavBar></NavBar>
            </div>
            <h1 className="text-center my-4">
              Our best Houses for rent
            </h1>
             <div className="mt-5 container">
             {
                spinner && <div class="d-flex justify-content-center">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
              <div className="row row-cols-1 row-cols-md-3 g-4">
              {
                  services.map(service => <Service
                  key={service._id}
                  service={service}
                  ></Service>)
              }
            </div>
             </div>
             <Footer></Footer>
        </div>
    );
};

export default Services;