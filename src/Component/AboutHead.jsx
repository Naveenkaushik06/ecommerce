import React from 'react'
import abouta6 from '/home/naveen/ecommerce/src/Image/about/a6.jpg';

const AboutHead = () => {
  return (
   <>
     <section className="about-head section-p1">
        <img src={abouta6} alt="" />
        <div>
            <h2>Who We Are?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit sit exercitationem nemo dolores reiciendis, commodi sunt blanditiis aliquid ipsa, atque, dolore iste. In perferendis laboriosam delectus totam excepturi blanditiis cum quasi recusandae corrupti, cumque ipsa libero quae eveniet nam illum dignissimos ea assumenda! Inventore eos enim libero, id, repudiandae iure quasi magni error esse quas fugiat rerum dolorem veniam voluptatibus?</p>
            <abbr title="">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</abbr>
            <br/><br/>
            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</marquee>
        </div>
    </section>
   </>
  )
}
export default AboutHead;
