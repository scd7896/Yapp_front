import {all, call} from 'redux-saga/effects'
import test from './test'
export default function* rootSaga(){
    yield all([
        call(test),

    ])
}