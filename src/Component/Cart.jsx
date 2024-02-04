import React from 'react'
import Header from './Header';
import ContactHeader from './ContactHeader';
import CartDetails from './CartDetails';
import CartAdd from './CartAdd';
import Footer from './Footer';

const Cart = () => {
  return (
    <>
        <Header/>
        <ContactHeader/>
        <CartDetails />
        <CartAdd/>
        <Footer />
    </>
  )
}
export default Cart;
