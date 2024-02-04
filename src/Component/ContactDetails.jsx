import React from "react";

const ContactDetails = () => {
  return (
    <>
      <section className="contact-details section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="fa-regular fa-map"></i>
              <p>34 Anisabad Road, Street 2, Patna</p>
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              <p>naveenkaushik0612@gmail.com</p>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <p>(+91) 73 6803 5821</p>
            </li>
            <li>
              <i className="fa-regular fa-clock"></i>
              <p>Monday to Saturday: 9:00am to 16:00pm</p>
            </li>
          </div>
        </div>
        <div className="map">

       <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=patna&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

        </div>
      </section>
    </>
  );
};
export default ContactDetails;
