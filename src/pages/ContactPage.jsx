import React from 'react';
import Nav from '../component/Nav/Nav';
import Footer from './../component/Footer/Footer';
import Contact from './../component/Contact/Contact';



const ContactPage = () => {
    return (
        <>
        <div className='container mx-auto px-3 space-y-10'>
            <Nav/>
            <Contact/>
        </div>
        <Footer/>
        </>
    );
};

export default ContactPage;