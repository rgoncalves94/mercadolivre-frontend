import PropTypes from 'prop-types'

const ProductItemType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        decimals: PropTypes.number.isRequired,
    }).isRequired,
    picture: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
    sold_quantity: PropTypes.number,
    description: PropTypes.string
})

const ProductType = PropTypes.shape({
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
    }).isRequired,
    item: ProductItemType.isRequired
})

const ProductListType = PropTypes.shape({
    author: {
        name: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
    },
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    items: PropTypes.arrayOf(ProductItemType).isRequired
})

export { ProductType, ProductItemType, ProductListType }