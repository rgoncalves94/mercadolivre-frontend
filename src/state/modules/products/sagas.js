import { 
    SEARCH_FAILURE,
    SEARCH_FULLFILED,
    SEARCH_REQUESTED,
    SEARCH_SUCCEDED,

    DETAIL_FAILURE,
    DETAIL_FULLFILED,
    DETAIL_REQUESTED,
    DETAIL_SUCCEDED,
} from './actionTypes'
import { takeLatest, call, put } from 'redux-saga/effects'
import { searchProductsByTerm, detailProductById } from '../../../services/ApiService'
import history from '../../../history'

function* asyncSearchRequest(action) {
    try {
        if(action.payload) {
            let response = yield call(searchProductsByTerm, action.payload)
            let data  = yield response.json();
            yield put({ type: SEARCH_SUCCEDED, payload: data })
        } else {
            yield put({ type: SEARCH_SUCCEDED, payload: null })
            history.push('/')
        }
    } catch(err) {
        yield put({ type: SEARCH_FAILURE, payload: err, error: true })
    } finally {
        yield put({ type: SEARCH_FULLFILED })
    }
}

export function* watchSearchRequest() {
    yield takeLatest(SEARCH_REQUESTED, asyncSearchRequest)
}

function* asyncDetailRequest(action) {
    try {
        let response = yield call(detailProductById, action.payload)
        let data  = yield response.json();
        yield put({ type: DETAIL_SUCCEDED, payload: data })
    } catch(err) {
        yield put({ type: DETAIL_FAILURE, payload: err, error: true })
    } finally {
        yield put({ type: DETAIL_FULLFILED })
    }
}

export function* watchDetailRequest() {
    yield takeLatest(DETAIL_REQUESTED, asyncDetailRequest)
}