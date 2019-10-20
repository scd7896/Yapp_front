import {all, fork} from 'redux-saga/effects'
import user from './user'

/* 비동기적으로 리듀서에 저장해야하는 데이터를 요청하는 부분을 올릴 예정입니다. */
export default function* rootSaga(){
    yield all([
        fork(user),

    ])
}