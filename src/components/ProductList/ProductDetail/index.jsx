import React from 'react'
import PropTypes from 'prop-types'
import { ProductType } from '../product.types'
import './styles.scss'
import Image from '../../Image'
import Button from '../../Button'
import ContentLoader from '../../ContentLoader'

function ProductDetail({ loading, product, onClickBuy, ...props }) {
    
    const defineCondition = (condition)  => {
        const conditions = {
            'new': 'Novo'
        }
        return conditions[condition] || condition
    }

    if(loading || !product) {
        return <ContentLoader></ContentLoader>;
    }

    const { item } = product
    return (
        <section>
            <article className="product-detail">
                <div className="row">
                    <div className="product-detail-images col-md-8 col-12">
                        <Image src={item.picture} description={item.title} />
                    </div>
                    <div className="product-detail-presentation col-md-4 col-12">
                        <h3 className="product-detail-presentation-qty-sold">{defineCondition(item.condition)} - {item.sold_quantity} vendidos</h3>
                        <h1 className="product-detail-presentation-title">{item.title}</h1>
                        <h2 className="product-detail-presentation-price">R$ {item.price.amount || '0'},{item.price.decimals ? item.price.decimals.toString().padEnd(2, '0') : '00'}</h2>
                        <Button onClick={onClickBuy}>Comprar</Button>
                    </div>
                </div>
                <div className="row">
                    <div className="product-detail-description col-12">
                        <h2 className="product-detail-description-title">Descrição do Produto</h2>
                        <div className="product-detail-description-content">
                            {!item.description ? '(Vazio)' : item.description.split("\n").map((item, index) => 
                                <span key={index}>
                                    {item}<br/>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

ProductDetail.propTypes = {
    product: ProductType,
    loading: PropTypes.bool,
    onClickBuy: PropTypes.func,
}

ProductDetail.defaultProps = {
    loading: false,
    onClickBuy: () => console.log('Buy clicked!')
}


export default ProductDetail