import React from 'react';
import Nav from '../component/Nav/Nav';
import Hero from '../component/Hero/Hero';
import About from '../component/About/About';
import Product from '../component/Product/Product';
import Footer from './../component/Footer/Footer';


const HomePage = () => {
    return (
        <>
        <div className='container mx-auto px-3 space-y-8'>
            <Nav/>
            <Hero/>
            <About/>
            <Product/>
        </div>
         <Footer/>
        </>
    );
};

export default HomePage;