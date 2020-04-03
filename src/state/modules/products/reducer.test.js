import reducer from './reducer'
import * as actions from './actionTypes'


const initialState = {
    term: '',
    loading: false,
    result: null,
    error: null,
    product: null,
}

describe('testing reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(initialState, {})).toBe(initialState);
    });

  it('should validate SEARCH actions REQUESTED / SUCCEDED / FULFILLED', () => {
        const startAction = {
            type: actions.SEARCH_REQUESTED,
            payload: 'iphone xr'
        };

        const stateRequested = reducer(initialState, startAction)
        
        expect(stateRequested).toEqual({
            term: 'iphone xr',
            loading: true,
            result: null,
            error: null,
            product: null
        });

        const stateSucceded = reducer(stateRequested, {
            type: actions.SEARCH_SUCCEDED,
            payload: { test: 'anyValue' }
        })

        expect(stateSucceded).toEqual({
            term: 'iphone xr',
            loading: true,
            result: { test: 'anyValue' },
            error: null,
            product: null,
        })


        const stateFullfilled = reducer(stateSucceded, {
            type: actions.SEARCH_FULLFILED
        })

        expect(stateFullfilled).toEqual({
            term: 'iphone xr',
            loading: false,
            result: { test: 'anyValue' },
            error: null,
            product: null,
        })

        const stateReRequested = reducer(stateFullfilled, {
            type: actions.SEARCH_REQUESTED,
            payload: 'motorola g7'
        })

        expect(stateReRequested).toEqual({
            term: 'motorola g7',
            loading: true,
            result: null,
            error: null,
            product: null,
        })
    });

    it('should validate SEARCH actions REQUESTED / FAILURE / FULFILLED', () => {
        const startAction = {
            type: actions.SEARCH_REQUESTED,
            payload: 'iphone 11'
        };

        const stateRequested = reducer(initialState, startAction)
        
        expect(stateRequested).toEqual({
            term: 'iphone 11',
            loading: true,
            result: null,
            error: null,
            product: null
        });

        const stateFailure = reducer(stateRequested, {
            type: actions.SEARCH_FAILURE,
            payload: { error: 'help!!' },
            error: true,
        })

        expect(stateFailure).toEqual({
            term: 'iphone 11',
            loading: true,
            result: null,
            error: { error: 'help!!' },
            product: null,
        })


        const stateFullfilled = reducer(stateFailure, {
            type: actions.SEARCH_FULLFILED
        })

        expect(stateFullfilled).toEqual({
            term: 'iphone 11',
            loading: false,
            result: null,
            error: { error: 'help!!' },
            product: null,
        })

        const stateReRequested = reducer(stateFullfilled, {
            type: actions.SEARCH_REQUESTED,
            payload: 'video tape'
        })

        expect(stateReRequested).toEqual({
            term: 'video tape',
            loading: true,
            result: null,
            error: null,
            product: null,
        })
    });


    it('should validate DETAIL actions REQUESTED / SUCCEEDED / FULFILLED', () => {
        const startAction = {
            type: actions.DETAIL_REQUESTED,
            payload: 'MLB101020'
        };

        const stateRequested = reducer(initialState, startAction)
        
        expect(stateRequested).toEqual({
            term: '',
            loading: true,
            result: null,
            error: null,
            product: null
        });

        const stateSucceded = reducer(stateRequested, {
            type: actions.DETAIL_SUCCEDED,
            payload: { sucesso: 'payload' },
            error: true,
        })

        expect(stateSucceded).toEqual({
            term: '',
            loading: true,
            result: null,
            error: null,
            product: { sucesso: 'payload' },
        })


        const stateFullfilled = reducer(stateSucceded, {
            type: actions.DETAIL_FULLFILED
        })

        expect(stateFullfilled).toEqual({
            term: '',
            loading: false,
            result: null,
            error: null,
            product: { sucesso: 'payload' },
        })

        const stateReRequested = reducer(stateFullfilled, {
            type: actions.DETAIL_REQUESTED,
            payload: 'MLB202010'
        })

        expect(stateReRequested).toEqual({
            term: '',
            loading: true,
            result: null,
            error: null,
            product: null,
        })
    });

    it('should validate DETAIL actions REQUESTED / FAILURE / FULFILLED', () => {
        const startAction = {
            type: actions.DETAIL_REQUESTED,
            payload: 'MLB101020'
        }

        const stateRequested = reducer(initialState, startAction)
        
        expect(stateRequested).toEqual({
            term: '',
            loading: true,
            result: null,
            error: null,
            product: null
        });

        const stateFailure = reducer(stateRequested, {
            type: actions.DETAIL_FAILURE,
            payload: { error: 'alert!!!!' },
            error: true,
        })

        expect(stateFailure).toEqual({
            term: '',
            loading: true,
            result: null,
            error: { error: 'alert!!!!' },
            product: null,
        })


        const stateFullfilled = reducer(stateFailure, {
            type: actions.DETAIL_FULLFILED
        })

        expect(stateFullfilled).toEqual({
            term: '',
            loading: false,
            result: null,
            error: { error: 'alert!!!!'},
            product: null,
        })

        const stateReRequested = reducer(stateFullfilled, {
            type: actions.DETAIL_REQUESTED,
            payload: 'MLB202010'
        })

        expect(stateReRequested).toEqual({
            term: '',
            loading: true,
            result: null,
            error: null,
            product: null,
        })
    });

});