import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function Content({ children, ...props}) {
    return (
        <main className="main">
            <div className="content col-10 offset-1">
                {children}
            </div>
        </main>
    )
}

Content.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Content