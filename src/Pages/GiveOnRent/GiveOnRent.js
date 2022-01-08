import React, { useState } from 'react';
import NavBar from '../Shared/Header/NavBar/NavBar'
import TopHeader from '../Shared/Header/TopHeader/TopHeader'
import { useForm } from "react-hook-form";
function GiveOnRent() {
    const [name, setName] = useState('');
    const [area, setArea] = useState('');
    const [bedroom, setBedroom] = useState('');
    const [bathroom, setBathroom] = useState('');
    const [kitchen, setKitchen] = useState('');
    const [garage, setGarage] = useState('');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');
    const [date, setDate] = useState(new Date());
    const [imageupload, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const currentDate = day + '-' + month + '-' + year;

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (!imageupload) {
            return;
        }
        const formData = new FormData();
        formData.append('p_name', data.name);
        formData.append('Area', data.area);
        formData.append('Bedroom', data.bedroom);
        formData.append('Bathroom', data.bathroom);
        formData.append('Garage', data.garage);
        formData.append('Kitchen', data.kitchen);
        formData.append('description', data.details);
        formData.append('imageupload', imageupload);
        formData.append('postDate', currentDate);
        formData.append('Price', data.price);
        console.log(data);
        fetch('https://agile-atoll-48938.herokuapp.com/services', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('service added successfully');
                    alert('service added successfully');
                    reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <TopHeader></TopHeader>
            <div className="sticky-top">
                <NavBar></NavBar>
            </div>
            <div className="container">
                <h2 className='my-3 fw-bold'>Rent Your Hosue to Grow Your Business:</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="name">House Name:</label>
                            <input
                                id="name"
                                required
                                {...register("name")}
                                type="text"
                            />
                            <label htmlFor="price">Rent Price:</label>
                            <input
                                id="price"
                                required
                                {...register("price")}
                                type="number"
                            />
                            <label htmlFor="area">House Area:</label>
                            <input
                                id="area"
                                required
                                {...register("area")}
                                type="text"
                            />
                            <label htmlFor="bedroom">Total Bedroom:</label>
                            <input
                                id="bedroom"
                                required
                                {...register("bedroom")}
                                type="text"
                            />
                            <label htmlFor="bathroom">Total Bathroom:</label>
                            <input
                                id="bathroom"
                                required
                                {...register("bathroom")}
                                type="text"
                            />
                            <label htmlFor="garage">Garage:</label>
                            <input
                                id="garage"
                                required
                                {...register("garage")}
                                type="text"
                            />
                            <label htmlFor="kitchen">Kitchen:</label>
                            <input
                                id="kitchen"
                                required
                                {...register("kitchen")}
                                type="text"
                            />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="details">House Description:</label>
                            <br />
                            <textarea
                                rows={5}
                                id="details"
                                type="text"
                                required
                                {...register("details")}
                            />
                            <br />
                            <label htmlFor="Name">House Image:</label> <br />
                            <div className="upload-btn-wrapper">
                                <button className="btn-f"><i className="fas fa-cloud-upload-alt"></i> Upload House Image</button>
                                <input
                                    className="upload-image"
                                    accept="image/*"
                                    type="file"
                                    onChange={e => setImage(e.target.files[0])}
                                />
                            </div>

                        </div>
                    </div>



                    <div className="text-center">
                        <button className="codepickjs-btn w-50 my-4" type="submit">
                            Add Service
                        </button>
                    </div>
                </form>

            </div>
            <div>


            </div>
        </div>
    )
}

export default GiveOnRent
