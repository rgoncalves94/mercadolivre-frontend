import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function Breadcrumbs({ crumbs, ...props }) {
    return (
        <ul>
            {crumbs.map(crumb => <li>{crumb}</li>)}
        </ul>
    )
}

Breadcrumbs.propTypes = {
    crumbs: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Breadcrumb