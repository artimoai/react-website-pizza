import React from 'react';
import Logo from '../assets/pizzaLogo.png';

function navbar() {
    return (
        <div className='navbar'>
            <div className='left-side'>
                <img src={Logo} />
            </div>
            <div className='right-side'>
            </div>
            
        </div>
    )
}

export default navbar;
