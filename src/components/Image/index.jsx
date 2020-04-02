import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function Image({width, height, src, description, ...props}) {
    return (
        <img className="image" width={width} height={height} src={src} alt={description} />
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
}


export default Image