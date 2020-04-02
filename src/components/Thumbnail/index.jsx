import React from 'react'
import './styles.scss'

function Thumbnail({ src, description, ...props }) {
    return (
        <div className="thumbnail">
            <img src={src} title={description} alt={description} />
        </div>
    )
}

export default Thumbnail