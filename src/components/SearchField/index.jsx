import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchRequest } from '../../state/modules/products/actions'
import './styles.scss'
import PropTypes from 'prop-types'
import searchIcon from '../../assets/ic_Search.png'
import history from '../../history'


function SearchField({ value, ...props}) {
    const buttonRef = useRef(null)
    const termStore = useSelector(store => store.products.term)
    const [term, setTerm] = useState(termStore)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        
        setTerm(e.target.value)
    }

    const handleKeyUp = (e) => {
        if(e.key === "Enter") 
            buttonRef.current && buttonRef.current.click()
    }

    const handleSearch = () => { 
        history.push(`/items?q=${encodeURIComponent(term)}`)
        dispatch(searchRequest(term)) 
    }

    useEffect(() => {
        setTerm(termStore)
    }, [termStore, setTerm])

    return (
        <div className="search-field">
            <input 
                className="search-field-input"
                placeholder="Nunca deixe de buscar"
                type="text" 
                value={term}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                {...props} />
            <button 
                ref={buttonRef}
                onClick={handleSearch}
                className="search-field-button">
                <img src={searchIcon} alt="Buscar produto" title="Buscar produto" />
            </button>
        </div>
    )
}

SearchField.propTypes = {
    value: PropTypes.string,
}

SearchField.defaultValue = {
    value: "",
}

export default SearchField