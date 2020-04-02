import React, {Fragment} from 'react';
import Nav from './nav'

const Header = () => {
    return (
        <Fragment>
        <header className="main_menu_area">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand logo-font" href="index.html">Prodig<span>e</span> Digital</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Nav />
                </div>
            </nav>
        </header>
        </Fragment>
    )
}

export default Header;