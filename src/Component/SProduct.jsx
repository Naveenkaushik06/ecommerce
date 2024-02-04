import React from "react";
import Header from "./Header";
import SProductDetails from "./SProductDetails";
import SProductFeatured from "./SProductFeatured";
import SignUpNewsletters from "./SignUpNewsletters";
import Footer from "./Footer";

const SProduct = () => {
  return (
    <>
      <Header />
      <SProductDetails />
      <SProductFeatured />
      <SignUpNewsletters />
      <Footer />
    </>
  );
};
export default SProduct;
