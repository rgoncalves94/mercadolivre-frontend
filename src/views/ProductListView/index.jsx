import React from 'react'
import Header from '../../components/Header'
import Content from '../../components/Content'
import Breadcrumbs from '../../components/Breadcrumbs'
import ProductList from '../../components/ProductList'
import Product from '../../components/ProductList/Product'
import qs from 'querystring'

const products = {
    "author": {
        "name": "Vendedor",
        "lastname": "Mercado Livre"
    },
    "categories": [
        "Celulares e Telefones",
        "Celulares e Smartphones"
    ],
    "items": [
        {
            "id": "MLB1348930369",
            "title": "Apple iPhone Xr Dual Sim 64 Gb Preto 3 Gb Ram",
            "price": {
                "currency": "BRL",
                "amount": 2999,
                "decimals": 0
            },
            "picture": "http://mlb-s2-p.mlstatic.com/811154-MLA31348359740_072019-I.jpg",
            "condition": "new",
            "free_shipping": false
        },
        {
            "id": "MLB1336245573",
            "title": "Apple iPhone Xr Dual Sim 128 Gb Preto 3 Gb Ram",
            "price": {
                "currency": "BRL",
                "amount": 3099,
                "decimals": 0
            },
            "picture": "http://mlb-s2-p.mlstatic.com/631888-MLA31348666005_072019-I.jpg",
            "condition": "new",
            "free_shipping": false
        },
        {
            "id": "MLB1482775931",
            "title": "Apple iPhone 11 Dual Sim 64 Gb Preto 4 Gb Ram",
            "price": {
                "currency": "BRL",
                "amount": 4247,
                "decimals": 87
            },
            "picture": "http://mlb-s2-p.mlstatic.com/885508-MLA32445302787_102019-I.jpg",
            "condition": "new",
            "free_shipping": false
        }
    ]
}

function ProductListView({ location, history, ...props}) {
    const query = qs.decode(location.search.replace(/^\?/, ''))

    if(!query.q) {
        history.push('/')
    }

    const handleChooseProduct = idProduct => () => history.push(`/items/${idProduct}`)
    
    return (
        <React.Fragment>
            <Header />
            <Breadcrumbs crumbs={products.categories} />
            <Content>
                <ProductList>
                    {products.items && products.items.length 
                        ? products.items.map((product, index) => 
                            <Product 
                                key={index} 
                                item={product}
                                onClick={handleChooseProduct(product.id)} />) 
                        : undefined}
                </ProductList>
            </Content>
        </React.Fragment>
    )
}

export default ProductListView