import React from 'react'
import PropTypes from 'prop-types'
import { ProductType } from '../product.types'
import './styles.scss'
import Image from '../../Image'

function ProductDetail({ product, onClickBuy, ...props }) {
    return (
        <section>
            <article>
                <Image src={product.item.picture} description={product.item.title} width="680px" height="auto" />
            </article>
        </section>
    )
}

ProductDetail.propTypes = {
    product: ProductType.isRequired,
    onClickBuy: PropTypes.func,
}

ProductDetail.defaultProps = {
    onClickBuy: () => console.log('clicked!')
}


export default ProductDetail