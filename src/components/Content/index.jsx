import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function Content({ noBgColor, children, ...props}) {
    return (
        <main className={`main`}>
            <div className={`content col-10 offset-1 ${noBgColor && 'no-bg-color'}`}>
                {children}
            </div>
        </main>
    )
}

Content.propTypes = {
    noBgColor: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

Content.defaultValues = {
    noBgColor: false,
}

export default Content