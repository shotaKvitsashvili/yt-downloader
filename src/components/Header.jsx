import React from 'react';
// import { Link } from 'react-router-dom';

import Logo from '../images/logo.svg'


// const menuLinks = [
//     {
//         name: 'მენიუ',
//         path: '/'
//     },
//     {
//         name: 'მენიუ',
//         path: '/'
//     },
//     {
//         name: 'მენიუ',
//         path: '/'
//     }
// ]

function Header() {
    return <header>
        <>
            <div className="w-full pt-7">
                <div className='logo relative flex justify-center'>
                    <a href='/'>
                        <img src={Logo} alt="logo" />
                    </a>
                </div>
            </div>
        </>
    </header>;
}

export default Header;
