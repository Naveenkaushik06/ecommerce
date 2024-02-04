import React from 'react'
import Header from './Header';
import PageHeaderBlogHeader from './PageHeaderBlogHeader';
import BlogDetails from './BlogDetails';
import Pagination from './Pagination';
import SignUpNewsletters from './SignUpNewsletters';
import Footer from './Footer';

const Blog = () => {
  return (
    <>
        <Header/>
        <PageHeaderBlogHeader/>
        <BlogDetails/>
        <Pagination/>
        <SignUpNewsletters/>
        <Footer/>
    </>
  )
}
export default Blog;
