import React from 'react'
import blogb1 from '/home/naveen/ecommerce/src/Image/blog/b1.jpg';
import blogb2 from '/home/naveen/ecommerce/src/Image/blog/b2.jpg';
import blogb3 from '/home/naveen/ecommerce/src/Image/blog/b3.jpg';
import blogb4 from '/home/naveen/ecommerce/src/Image/blog/b4.jpg';
import blogb6 from '/home/naveen/ecommerce/src/Image/blog/b6.jpg';

const BlogDetails = () => {
  return (
    <>
         <section className="blog">
        <div className="blog-box">
            <div className="blog-img">
                <img src={blogb1} alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard... </p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={blogb2} alt="" />
            </div>
            <div className="blog-details">
                <h4>How to style a Quiff</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard... </p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={blogb3} alt="" />
            </div>
            <div className="blog-details">
                <h4>Must-Have Skater Girl Items</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard... </p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={blogb4} alt="" />
            </div>
            <div className="blog-details">
                <h4>Runway-Inspired Trends</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard... </p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={blogb6} alt="" />
            </div>
            <div className="blog-details">
                <h4>AW20 Menswear Trends</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard... </p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
         </section>
    </>
  )
}
export default BlogDetails;
