import React from 'react'
import logo from '../assets/logo.png';
import { BsMouse } from 'react-icons/bs';

const Others = () => {
    return (
        <>
            <div className="cursor"></div>
            <a href="/" className="logo" >
                <img src={logo} alt="logo" data-cursorpointer/>
            </a>
            <a href="https://www.mbachaiwala.com/franchise/" className='franchiseBtn' data-cursorpointer>Get a franchise</a>
            <BsMouse className='scrollBtn' data-cursorpointer/>
        </>

    )
}

export default Others