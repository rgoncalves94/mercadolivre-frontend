import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Content from '../../components/Content'
import Breadcrumbs from '../../components/Breadcrumbs'
import ProductList from '../../components/ProductList'
import Product from '../../components/ProductList/Product'
import qs from 'querystring'
import { useSelector, useDispatch } from 'react-redux'
import { searchRequest } from '../../state/modules/products/actions'

function ProductListView({ location, history, ...props}) {
    const [term, products, loading] = useSelector(store => [store.products.term, store.products.result, store.products.loading])
    const dispatch = useDispatch()
    const { q } = qs.decode(location.search.replace(/^\?/, ''))

    if(!q) {
        history.push('/')
    }

    useEffect(() => {
        if(!term && q) {
            dispatch(searchRequest(q))
        }
    }, [term, q, dispatch])

    const handleChooseProduct = idProduct => () => history.push(`/items/${idProduct}`)
    
    return (
        <React.Fragment>
            <Header />
            <Breadcrumbs crumbs={!loading ? products && products.categories ? products.categories : [] : ['Carregando...']} />
            <Content>
                <ProductList loading={loading}>
                    {products && products.items && products.items.length 
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