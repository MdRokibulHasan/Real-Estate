import React from 'react';
import Projects from '../../Projects/Projects/Projects';
import Footer from '../../Shared/Footer/Footer/Footer';
import NavBar from '../../Shared/Header/NavBar/NavBar';
import Reviews from '../../Shared/Reviews/Reviews/Reviews';
import Hero from '../Hero/Hero';
import HomeBlogs from '../HomeBlogs/HomeBlogs/HomeBlogs';
import HomeProjects from '../HomeProjects/HomeProjects';
import HomeServices from '../HomeServices/HomeServices/HomeServices';
import Services from '../Services/Services/Services'
import TopHeader from '../../Shared/Header/TopHeader/TopHeader';
import HomeAboutSection from '../HomeAboutSection/HomeAboutSection';
import './Home.css';
const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <div className="sticky-top">
            <NavBar></NavBar>
            </div>
            <Hero></Hero>
            <HomeAboutSection></HomeAboutSection>
            <h1 className="text-center fw-bold mb-5">OUR Services</h1>
            <HomeServices></HomeServices>
            <h1 className="text-center fw-bold mt-5">OUR Reviews</h1>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;