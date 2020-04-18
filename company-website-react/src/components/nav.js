import React from 'react';
import {Link} from 'react-router-dom';

const navigationDetails = [
    {
        'itemName':'Home',
        'itemLink':'/'
    },
    {
        'itemName':'About Us',
        'itemLink':'about-us'
    },
    {
        'itemName':'Services',
        'itemLink':'service'
    },
    {
        'itemName':'Portfolio',
        'itemLink':'https://tiny.cc/pst39y',
        'openInNewWindow':'true'
    },
    {
        'itemName':'Contact',
        'itemLink':'contact-us'
    }
]

const Nav = () => {
    return(
        <ul className="navbar-nav">
            {
                navigationDetails.map((arrItems, i) => {
                    return(
                        //arrItems.openInNewWindow === 'true' ? <li key={i} className="nav-item"><a target="_blank" rel="noopener noreferrer" className="nav-link" href={arrItems.itemLink}>{arrItems.itemName}</a></li> : <li key={i}  className="nav-item"><a className="nav-link" href={arrItems.itemLink}>{arrItems.itemName}</a></li>

                        <li key={i} className="nav-item"><Link to={arrItems.itemLink}>{arrItems.itemName}</Link></li>
                    )
                })
            }
        
        </ul>
    )
}

export default Nav;