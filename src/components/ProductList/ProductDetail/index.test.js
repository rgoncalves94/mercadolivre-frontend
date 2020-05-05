import { mount, shallow } from "enzyme"
import React from 'react'
import ProductDetail from "."


describe('testing ProductDetail', () => {
    const detailItem = {
        author: {
            name: "Rafael",
            lastname: "Gonçalves"
        }, 
        item: {
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
    }

    test('testing default values', () => {
        const wrapper = shallow(<ProductDetail />)
        expect(wrapper.find('ContentLoader').exists()).toBe(true)
    })

    test('testing loading is false and product not exists', () => {
        const wrapper = shallow(<ProductDetail loading={false} />)
        expect(wrapper.find('ContentLoader').exists()).toBe(true)
    })
    test('testing loading when true', () => {
        const wrapper = shallow(<ProductDetail loading={true} />)
        expect(wrapper.find('ContentLoader').exists()).toBe(true)
    })

    test('testing children components and object text rendering', () => {
        const wrapper = mount(<ProductDetail product={detailItem} />)
        expect(wrapper.find('ContentLoader').exists()).toEqual(false)
        const { description, src } = wrapper.find('Image').props()
        expect(description).toBe("Iphone XR")
        expect(src).toBe("https://via.placeholder.com/150")

        const { type, variant } = wrapper.find('Button').props()

        expect(wrapper.find('Button').text()).toBe("Comprar")
        expect(type).toBe('button')
        expect(variant).toBe('default')

        expect(wrapper.find('.product-detail-presentation-title').text()).toBe('Iphone XR')
        expect(wrapper.find('.product-detail-presentation-qty-sold').text()).toBe('Novo - 20 vendidos')
        expect(wrapper.find('.product-detail-presentation-price').text()).toBe("R$ 1000,00")

        expect(wrapper.find('.product-detail-description-content span')).toHaveLength(1)
    })

    const newDetailItem = {
        author: {
            name: "Rafael",
            lastname: "Gonçalves"
        }, 
        item: {
            id: "MLB123",
            title: "Iphone XR",
            price: {
                currency: 'ARG',
                amount: null,
                decimals: 0
            },
            picture: "https://via.placeholder.com/150",
            condition: 'old',
            free_shipping: false,
            sold_quantity: 20,
            description: 'Produto de excelente qualidade'
        }
    }

    test('testing another currency and condition', () => {
        const wrapper = shallow(<ProductDetail product={newDetailItem} />)
        expect(wrapper.find('.product-detail-presentation-qty-sold').text()).toBe('old - 20 vendidos')
        expect(wrapper.find('.product-detail-presentation-price').text()).toBe("R$ 0,00")
    })
})