import React from 'react'
import './styles.scss'

function NavBar({ children, ...props}) {
    return (
        <nav className="navbar col-md-10" {...props}>
            {children}
        </nav>
    )
}

export default NavBar