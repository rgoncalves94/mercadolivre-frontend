import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function Image({ src, description, ...props}) {
    return (
        <img className="image" src={src} alt={description} />
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}


export default Image