import React from 'react';
import FooterLogo from '../img/footer-logo.png';

const Footer = () => {
    return (
        <footer className="footr_area">
            <div className="footer_widget_area">
                <div className="container">
                    <div className="row footer_widget_inner">
                        <div className="col-lg-6 col-sm-6">
                            <aside className="f_widget f_about_widget">
                                <img src={FooterLogo} alt="" />
                            </aside>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <aside className="f_widget f_subs_widget">
                                <div className="f_title">
                                    <h3>Subscribe to newsletter</h3>
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Your e-mail address here" aria-label="Your e-mail address here" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-secondary submit_btn" type="button">Subscribe</button>
                                    </span>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_copyright">
                <div className="container">
                    <div className="float-sm-left">
                        <h5>Copyright &copy; 2020. All rights reserved.</h5>
                    </div>
                    <div className="float-sm-right">
                        <ul>
                            <li><a href="https://www.facebook.com/prodigedigital
    " target="_blank"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/prodigedigital
    " target="_blank"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/prodigedigital/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;