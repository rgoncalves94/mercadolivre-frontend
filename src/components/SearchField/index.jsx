import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import searchIcon from '../../assets/ic_Search.png'

function SearchField({ value, onChange, ...props}) {
    return (
        <div className="search-field">
            <input 
                className="search-field-input"
                placeholder="Nunca deixe de buscar"
                type="text" 
                value={value} 
                onChange={onChange} 
                {...props} />
            <button 
                className="search-field-button">
                <img src={searchIcon} alt="Buscar produto" title="Buscar produto" />
            </button>
        </div>
    )
}

SearchField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

SearchField.defaultValue = {
    value: "",
}

export default SearchField