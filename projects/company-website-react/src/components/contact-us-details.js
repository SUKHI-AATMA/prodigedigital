import React from 'react';
import WorLdMap from '../img/world-map.png'

const ContactUsDetails = () => {
    return (
        <section className="world_map_area p_100">
            <div className="container">
                <div className="world_map_inner">
                    <img className="img-fluid" src={WorLdMap} alt="" />
                    <div className="bd-callout">
                        <h3>Mumbai Office</h3>
                        <p>209, Amir Industrial Estate, <br />Sun mill compound, <br />Lower Parel West, Mumbai, <br />Maharashtra 400012</p>
                        <h4><a href="tel:+919987590572">+91 99875 90572</a>
                            <a href="tel:+919930130172">+91 99301 30172</a>
                            <a href="mailto:digital.prodige@gmail.com">digital.prodige@gmail.com</a></h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsDetails;