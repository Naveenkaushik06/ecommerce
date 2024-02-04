import React from 'react'
import Video from '/home/naveen/ecommerce/src/Image/about/video.mp4'

const AboutApp = () => {
  return (
    <>
    <section className="about-app section-p1">
        <h1>Download Our <a href="#">App</a></h1>
        <div class="video">
            <video src={Video} width="800" height="400" autoplay muted loop controls />
        </div>
    </section>
    </>
  )
}
export default AboutApp;
