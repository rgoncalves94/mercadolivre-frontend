import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Content from '../../components/Content'
import Breadcrumbs from '../../components/Breadcrumbs'
import ProductDetail from '../../components/ProductList/ProductDetail'
import { useSelector, useDispatch } from 'react-redux'
import { detailRequest } from '../../state/modules/products/actions'

function ProductView({ match, history, ...props}) {
    const [product, loading] = useSelector(store => [store.products.product, store.products.loading])
    const dispatch = useDispatch()
    const { id } = match.params

    useEffect(() => {
        dispatch(detailRequest(id))
    }, [id, dispatch])

    return (
        <React.Fragment>
            <Header />
            <Breadcrumbs crumbs={!loading ? product && product.item.categories ? product.item.categories :  [] : ['Carregando...']} />
            <Content>
                <ProductDetail loading={loading} product={product} />
            </Content>
        </React.Fragment>
    )
}

export default ProductView