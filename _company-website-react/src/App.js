import React from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/layers.css';
import './css/navigation.css';
import './css/owl.carousel.min.css';
import './css/responsive.css';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <header className="main_menu_area">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand logo-font" href="index.html">Prodig<span>e</span> Digital</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="about-us.html">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="service.html">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://tiny.cc/pst39y" target="_blank">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  );
}

export default App;