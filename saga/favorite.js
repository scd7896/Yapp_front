import {all, delay,fork, takeEvery,takeLatest, call,put,take} from 'redux-saga/effects'
import {
    GET_FAVORITE_REQUEST, 
    GET_FAVORITE_SUCCESS , 
    GET_FAVORITE_FAILURE , 
    GET_FAVORITE_FLUSH,
    ADD_FAVORITE_SUCCESS,
    ADD_FAVORITE_REQUEST,
    ADD_FAVORITE_FAILURE,
    DELETE_FAVORITE_FAILURE,
    DELETE_FAVORITE_REQUEST,
    DELETE_FAVORITE_SUCCESS
} from '../action'
import baseURL from '../url'
import cookies from '../methods/cookies'

import fetch from 'isomorphic-unfetch'

function favoriteRequestAPI(userToken){
    return fetch(baseURL + '/mypage/cart', {
        headers : { 
            Authorization : 'bearer ' + userToken,
            accept : 'application/json',
            'Content-Type' : 'application/json'
        }
    }).then(res => {
        if(res.ok){
            return res.json();
        }
        else{
            throw '즐겨찾기 데이터 가져오기 실패'
        }
    }).catch(err=>{
        throw '즐겨찾기 데이터 가져오기 실패'
    })
}

function * favoriteRequest(action){
    try{
        
        var userToken = action.userToken;
        if(userToken == undefined || userToken == ''){
            throw '로그인 후 시도해주세요'
        }
        else{
            const getFavoriteResult = yield call(favoriteRequestAPI, userToken);
            yield put({
                type : GET_FAVORITE_SUCCESS,
                favoriteList : getFavoriteResult.cart.map(cart => cart.projectId)
            })
        }
    }
    catch(e){
        yield put({
            type : GET_FAVORITE_FAILURE,
            error : e
        })
    }
}

function * watchFavoriteRequest(){
    yield takeLatest(GET_FAVORITE_REQUEST, favoriteRequest)
}

function favoriteAddApi(userToken, favoriteId){
    fetch(baseURL + '/projects/' + favoriteId + '/cart', {
        headers : {
            Authorization : 'bearer ' + userToken,
            accept : 'application/json',
            'Content-Type' : 'application/json'
        },
        method : 'POST'
    })
}

//test

function * favoriteAdd(action){
    try{
        var userToken = cookies.getCookie('user-token');
        if(userToken == undefined || userToken == ''){
            throw '로그인 후 시도해주세요'
        }
        var favoriteId = action.favoriteId ;

        yield call(favoriteAddApi, userToken , favoriteId)
        yield put({
            type : ADD_FAVORITE_SUCCESS,
            favoriteId : favoriteId
        })
    }
    catch(e){
        yield put({
            type : ADD_FAVORITE_FAILURE,
            error : e
        })
    }
}

function * watchFavoriteAdd(){
    yield takeLatest(ADD_FAVORITE_REQUEST, favoriteAdd)
}

function favoriteDeleteApi(userToken, favoriteId){
    fetch(baseURL + '/projects/' + favoriteId + '/cart', {
        headers : {
            Authorization : 'bearer ' + userToken,
            accept : 'application/json',
            'Content-Type' : 'application/json'
        },
        method : 'DELETE'
    })
}


function * favoriteDelete(action){
    try{
        var userToken = cookies.getCookie('user-token');
        if(userToken == undefined || userToken == ''){
            throw '로그인 후 시도해주세요'
        }
        var favoriteId = action.favoriteId ;

        yield call(favoriteDeleteApi, userToken , favoriteId)
        yield put({
            type : DELETE_FAVORITE_SUCCESS,
            favoriteId : favoriteId
        })
    }
    catch(e){
        yield put({
            type : DELETE_FAVORITE_FAILURE,
            error : e
        })
    }
}

function * watchFavoriteDelete(){
    yield takeLatest(DELETE_FAVORITE_REQUEST, favoriteDelete)
}


export default function* joinSaga(){
    yield all([
        fork(watchFavoriteRequest),
        fork(watchFavoriteAdd),
        fork(watchFavoriteDelete)
    ])
}