import React, { useState } from 'react';
const AddService = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');
    const [technology, setTechnology] = useState('');
    const [date, setDate] = useState(new Date());
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const currentDate = day + '-' + month + '-' + year;
    console.log(currentDate);
    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('details', details);
        formData.append('image', image);
        formData.append('postDate', currentDate);
        formData.append('price', price);
        formData.append('technology', technology);

        fetch('https://agile-atoll-48938.herokuapp.com/services', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('service added successfully');
                    alert('service added successfully');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Service Name:</label>
            <input
                id="name"
                required
                onChange={e => setName(e.target.value)}
                type="text"
            />
            <label htmlFor="price">Service Price:</label>
            <input
                id="price"
                required
                onChange={e => setPrice(e.target.value)}
                type="number"
            />
            <label htmlFor="technology">Used Technology:</label>
            <input
                id="technology"
                required
                onChange={e => setTechnology(e.target.value)}
                type="text"
            />
            <br />
            <label htmlFor="details">Service Details:</label>
            <br />
            <textarea
                rows={5}
                id="details"
                type="text"
                required
                onChange={e => setDetails(e.target.value)}
            />
            <br />
            <label htmlFor="Name">Service Thumbnail:</label> <br />
            <div className="upload-btn-wrapper">
                <button className="btn-f"><i className="fas fa-cloud-upload-alt"></i> Upload Thumbnail</button>
                <input
                className="upload-image"
                accept="image/*"
                type="file"
                onChange={e => setImage(e.target.files[0])}
            />
            </div>
           
            <br />
            <div className="text-center">
            <button className="codepickjs-btn w-50 my-4" type="submit">
                Add Service
            </button>
            </div>
        </form>
    </div>
    );
};

export default AddService;