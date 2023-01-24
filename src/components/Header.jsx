import React, { useState } from 'react'
import './Header.css'
import logo from '../assets/images/logo.svg'
import open from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-menu-close.svg'

const HeaderContent = () => {
    const [menu, setMenu] = useState('true')
    const changeMenu = () => setMenu(!menu)

    return (
        <>
            <header className="header-dt">
                <img src={logo} alt="logo" />
                <nav className="menu-nh">
                    <ul className='navlist'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">New</a></li>
                        <li><a href="/">Popular</a></li>
                        <li><a href="/">Trending</a></li>
                        <li><a href="/">Categories</a></li>
                    </ul>
                </nav>
            </header>

            {menu ? (
                <header className="header-mob">
                    <img src={logo} alt="logo" />
                    <div onClick={changeMenu} className="open-menu">
                        <img src={open} alt="menu" />
                    </div>
                </header>
            ) : (
                <>
                    <div className="filter"></div>
                    <header className="header-mob">
                        <img src={logo} alt="logo" />
                        <div onClick={changeMenu} className="close-menu">
                            <img src={close} alt="close menu" />
                        </div>
                        <nav className="menu-nh">
                            <a href="/">Home</a>
                            <a href="/">New</a>
                            <a href="/">Popular</a>
                            <a href="/">Trending</a>
                            <a href="/">Categories</a>
                        </nav>
                    </header>
                </>
            )}
        </>
    )
}

export default HeaderContent