import React from 'react'
import Header from './Header';
import ContactHeader from './ContactHeader';
import ContactDetails from './ContactDetails';
import ContactFormDetails from './ContactFormDetails';
import SignUpNewsletters from './SignUpNewsletters';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
    <Header/>
    <ContactHeader/>
    <ContactDetails/>  
    <ContactFormDetails />
    <SignUpNewsletters />
    <Footer/>
    </>
  )
}
export default Contact;