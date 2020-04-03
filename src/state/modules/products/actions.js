import { SEARCH_REQUESTED, DETAIL_REQUESTED } from './actionTypes'

export const searchRequest = (term) => ({
    type: SEARCH_REQUESTED,
    payload: term
})

export const detailRequest = (id) => ({
    type: DETAIL_REQUESTED,
    payload: id
})