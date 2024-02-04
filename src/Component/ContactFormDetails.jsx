import React from 'react'
import people1 from '/home/naveen/ecommerce/src/Image/people/1.png';
import people2 from '/home/naveen/ecommerce/src/Image/people/2.png';
import people3 from '/home/naveen/ecommerce/src/Image/people/3.png';

const ContactFormDetails = () => {
  return (
    <>
    <section className="form-details">
        <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button className="normal">Submit</button>
        </form>
        <div className="people">
            <div>
                <img src={people1} alt="" />
                <p><span>Joseph Thomas</span> Senior Marketing Manager <br/> Phone: + 000 123 000 77 88 <br/> Email: contact@example.com</p>
            </div>
            <div>
                <img src={people2} alt="" />
                <p><span>David Smith</span> Senior Marketing Manager <br/> Phone: + 000 123 000 77 88 <br/> Email: contact@example.com</p>
            </div>
            <div>
                <img src={people3} alt="" />
                <p><span>Eliana Perry</span> Senior Marketing Manager <br/> Phone: + 000 123 000 77 88 <br/> Email: contact@example.com</p>
            </div>
        </div>
    </section>
    </>
  )
}
export default ContactFormDetails; 