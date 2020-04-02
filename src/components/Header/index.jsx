import React from 'react'
import './styles.scss'
import Logo from '../Logo'
import SearchField from '../SearchField'
import NavBar from '../NavBar'


function Header({ ...props}) {
    return (
        <header className="header">
            <NavBar>
                <Logo />
                <SearchField />
            </NavBar>
        </header>
    )
}


export default Header