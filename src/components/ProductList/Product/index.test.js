import { shallow } from 'enzyme'
import React from 'react'
import Product from './index'

describe('testing product', () => {
    const item = {
        id: "MLB123",
        title: "Iphone XR",
        price: {
            currency: 'BRL',
            amount: 1000,
            decimals: 0
        },
        picture: "https://via.placeholder.com/150",
        condition: 'new',
        free_shipping: true,
        sold_quantity: 20,
        description: 'Produto de excelente qualidade'
    }
    
    test('testing default props', () => {
        const wrapper = shallow(<Product item={item} />)
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(".product-info-amount").text()).toEqual(expect.stringContaining('R$ 1000,00'))

        expect(wrapper.find(".product-info-name").text()).toBe("Iphone XR")
        
        expect(wrapper.find("IconFreeShipping").exists()).toBe(true)
    })

    test('testing not freeshipping', () => {
        const paidShippingItem = { ...item, free_shipping: false }
        const wrapper = shallow(<Product item={paidShippingItem} />)
        expect(wrapper.find("IconFreeShipping").exists()).toBe(false)
    })
})