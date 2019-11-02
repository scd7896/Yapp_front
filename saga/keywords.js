import {all, delay,fork, takeEvery,takeLatest, call,put,take} from 'redux-saga/effects'
import { SET_KEYWORDS_REQUEST, SET_KEYWORDS_SUCCESS, SET_KEYWORDS_FAILURE } from '../action'

import axios from 'axios'
import url from '../url'
function  setKeywordsAPI(action){
    return axios.put(`${url}/mypage/keywords`, {"keywords" : action.data},{
        headers :{
            Authorization: `bearer ${action.token}`
        }
    })
}
function * setKeywords(action){
    try{
        const result = yield call(setKeywordsAPI, action);
        yield put({
            type: SET_KEYWORDS_SUCCESS
        })
        
    }catch(e){
        yield put({
            type : SET_KEYWORDS_FAILURE
        })
    }
}
function * watchSetKeywords(){
    yield takeEvery(SET_KEYWORDS_REQUEST, setKeywords)
}
export default function* keywordsSaga(){
    yield all([
        fork(watchSetKeywords)
    ])
}