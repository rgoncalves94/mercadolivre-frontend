import { fork, all } from 'redux-saga/effects'
import { watchSearchRequest, watchDetailRequest } from './modules/products/sagas'

export default function* root() {
    yield all([
        fork(watchSearchRequest),
        fork(watchDetailRequest),
    ])
}