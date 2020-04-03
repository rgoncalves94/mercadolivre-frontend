import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function Breadcrumbs({ crumbs, ...props }) {

    const addSymbol = (index, length) => index < length-1 ? <span>&gt;</span> : ''
    const addBold = (index, length) => index < length-1 ? '' : 'bold'

    return (
        <section className="breadcrumbs col-10 offset-1" {...props}>
            <ul className="breadcrumbs-list">
                {crumbs.map((crumb, index) =>( 
                    <React.Fragment key={index}>
                        <li className={`breadcrumbs-list-item ${addBold(index, crumbs.length)}`}>{crumb}</li>
                        {addSymbol(index, crumbs.length)}
                    </React.Fragment>
                ))}
            </ul>
        </section>
    )
}

Breadcrumbs.propTypes = {
    crumbs: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Breadcrumbs