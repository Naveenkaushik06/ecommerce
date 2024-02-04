import React from 'react'
import PageHeader from './PageHeader';
import Header from './Header';
import Products from './Products';
import Pagination from './Pagination';
import SignUpNewsletters from './SignUpNewsletters';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Shop = () => {
  return (
    <>
        <Header/>
        <PageHeader/>
          <Products />
        <Pagination />
        <SignUpNewsletters />
        <Footer />

        <Outlet />
    </>
  )
}
export default Shop;