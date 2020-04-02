import React from 'react';

const navigationDetails = [
    {
        'itemName':'Home',
        'itemLink':'index.html'
    },
    {
        'itemName':'About Us',
        'itemLink':'about-us.html'
    },
    {
        'itemName':'Services',
        'itemLink':'service.html'
    },
    {
        'itemName':'Portfolio',
        'itemLink':'https://tiny.cc/pst39y',
        'openInNewWindow':'true'
    },
    {
        'itemName':'Contact',
        'itemLink':'contact.html'
    }
]

const Nav = () => {
    return(
        <ul className="navbar-nav">
            {
                navigationDetails.map((arrItems, i) => {
                    return(
                        arrItems.openInNewWindow === 'true' ? <li key={i} className="nav-item"><a target="_blank" rel="noopener noreferrer" className="nav-link" href={arrItems.itemLink}>{arrItems.itemName}</a></li> : <li key={i}  className="nav-item"><a className="nav-link" href={arrItems.itemLink}>{arrItems.itemName}</a></li>
                    )
                })
            }
        
        </ul>
    )
}

export default Nav;