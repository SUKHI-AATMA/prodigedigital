import React from 'react';

const GetInTouch = () => {
    return (
        <section className="get_in_touch_area">
            <div className="container">
                <div className="row get_touch_inner">
                    <div className="col-lg-6">
                        <form className='contact_us_form row' action='thankyou' name='contact-home' method='post'>
                            <input type='hidden' name='form-name' value='contact-home' />
                            <div className="form-group col-lg-6">
                                <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
                            </div>
                            <div className="form-group col-lg-6">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="form-group col-lg-12">
                                <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject*" required />
                            </div>
                            <div className="form-group col-lg-12">
                                <textarea className="form-control" name="message" id="message" rows="1" placeholder="Message" required></textarea>
                            </div>
                            <div className="form-group col-lg-12">
                                <button type="submit" value="submit" className="btn submit_btn form-control">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="touch_details">
                            <div className="l_title">
                                <img src="img/icon/title-icon.png" alt="" />
                                <h6>Say hello</h6>
                                <h2>Get in touch, send us an e-mail or call us</h2>
                            </div>
                            <p>Mail us at <a href="mailto:digital.prodige@gmail.com">digital.prodige@gmail.com</a></p>
                            <h5>Call us now</h5>
                            <a href="tel:+919987590572">
                                <h4>+91 99875 90572</h4>
                            </a><br />
                            <a href="tel:+919930130172">
                                <h4>+91 99301 30172</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch;