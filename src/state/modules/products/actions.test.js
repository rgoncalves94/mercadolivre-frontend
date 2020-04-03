import { detailRequest, searchRequest } from './actions'
import reducer from './reducer'

const initialState = {
    term: '',
    loading: false,
    result: null,
    error: null,
    product: null,
}

describe('Testing action creators', () => {
    it('testing searchRequest creator', () => {
        const action = searchRequest('iphone xr')

        expect(reducer(initialState, action)).toEqual({
            term: 'iphone xr',
            loading: true,
            result: null,
            error: null,
            product: null,
        })

    })

    it('testing searchRequest creator with filled state', () => {
        const action = searchRequest('android motorola')

        const filledState = {
            term: 'iphone xr',
            loading: true,
            result: { payload: true},
            error: null,
            product: null,
        }

        expect(reducer(filledState, action)).toEqual({
            term: 'android motorola',
            loading: true,
            result: null,
            error: null,
            product: null,
        })

    })

    it('testing detailRequest creator', () => {
        const action = detailRequest('MLB9999')

        expect(reducer(initialState, action)).toEqual({
            term: '',
            loading: true,
            result: null,
            error: null,
            product: null,
        })

    })

    it('testing searchRequest creator with filled state', () => {
        const action = detailRequest('MLB8888')

        const filledState = {
            term: 'iphone xr',
            loading: true,
            result: null,
            error: { error: 'having failed'},
            product: null,
        }

        expect(reducer(filledState, action)).toEqual({
            term: 'iphone xr',
            loading: true,
            result: null,
            error: null,
            product: null,
        })

    })
})