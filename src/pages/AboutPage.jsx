import React from 'react';
import Nav from '../component/Nav/Nav';
import Accordian from '../component/Accordian/Accordian';
import Footer from '../component/Footer/Footer';

const AboutPage = () => {
    return (
        <>
        <div className='container mx-auto px-3 space-y-10'>
            <Nav/>
            <Accordian/>
        </div>
        <Footer/>
        </>
    );
};
export default AboutPage;