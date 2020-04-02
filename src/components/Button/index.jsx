import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function Button({ type, variant, onClick, children, ...props}) {
    return (
        <button className={`btn btn-${variant}`} type={type}>{children}</button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    variant: PropTypes.oneOf(['default']),
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

Button.defaultProps = {
    type: 'button',
    variant: 'default',
}

export default Button