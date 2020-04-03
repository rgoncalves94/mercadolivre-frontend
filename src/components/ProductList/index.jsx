import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import ContentLoader from '../ContentLoader'

function ProductList({loading, children, ...props}) {

    const empty = <div className="product-list-empty"><p>Nenhum item encontrado para a busca realizada.</p></div>
    
    const loadingComponent = (
        <React.Fragment>
            <ContentLoader /> <ContentLoader /> <ContentLoader />
        </React.Fragment>
    )

    return ( 
        <section className="product-list">
            {loading ? loadingComponent : children || empty}
        </section>
    )
}

ProductList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    loading: PropTypes.bool,
}

ProductList.defaultValues = {
    loading: false,
}

export default ProductList