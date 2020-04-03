import React from 'react'
import './styles.scss'
import logo from '../../assets/Logo_ML.png'
import history from '../../history'

function Logo() {
    return (
        <img 
            className="logo"
            onClick={() => history.push('/')}
            src={logo} 
            title="Logotipo do Mercado Livre" 
            alt="Logotipo do Mercado Livre" />
    )
}


export default Logo