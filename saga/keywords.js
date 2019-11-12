import {all, delay,fork, takeEvery,takeLatest, call,put,take} from 'redux-saga/effects'
import { SET_KEYWORDS_REQUEST, SET_KEYWORDS_SUCCESS, SET_KEYWORDS_FAILURE, GET_KEYWORDS_REQUEST, GET_KEYWORDS_FAILURE, GET_KEYWORDS_SUCCESS } from '../action'

import axios from 'axios'
import url from '../url'
import Router from 'next/router'
const getKeywordsAPI = (token)=>{
    return axios.get(`${url}/mypage/keywords`, {
        headers :{
            Authorization: `bearer ${token}`
        }
    })
}
function * getKeywords(action){
    try{
        const result = yield call(getKeywordsAPI, action.token)
        yield put({
            type : GET_KEYWORDS_SUCCESS,
            data : result.data.keywordFromUser
        })
    }catch{
        yield put({
            type : GET_KEYWORDS_FAILURE
        })
        Router.push('/error/500')
    }
}
function* watchGetKeywords(){
    yield takeEvery(GET_KEYWORDS_REQUEST, getKeywords)
}

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
        fork(watchSetKeywords),
        fork(watchGetKeywords)
    ])
}