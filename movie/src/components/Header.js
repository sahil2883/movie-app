import React from 'react';
import camera from '../img/camera.png';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='bg-dark text-white p-2'>
        <header className='container-fluid'>
            <nav className='d-flex align-items-center justify-content-between'>
                <div>
                    <img src={camera} alt="logo" width={'50px'} />
                </div>
                <div className='list'>
                    <ul className='d-flex align-items-center justify-content-between '>
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                        <li>movies</li>
                        <li>Teams</li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header;