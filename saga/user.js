import {all, delay,fork, takeEvery,takeLatest, call,put,take} from 'redux-saga/effects'
import { GET_MYDATA_REQUEST, GET_MYDATA_FAILURE, GET_MYDATA_SUCCESS,
    USER_LOGIN_REQUEST,USER_LOGIN_FAILURE,USER_LOGIN_SUCCESS,
    USER_LOGOUT_REQUEST,USER_LOGOUT_FAILURE,USER_LOGOUT_SUCCESS,
    GET_MYPORTFOLIO_REQUEST, GET_MYPORTFOLIO_SUCCESS, GET_MYPORTFOLIO_FAILURE,
    GET_FAVORITE_REQUEST,
    GET_FAVORITE_FLUSH} from '../action'
import axios from 'axios'
import fetch from 'isomorphic-unfetch'
import url from '../url'
import cookies from '../methods/cookies'

import {useDispatch} from 'react-redux'

function getUserAPI(myCookie){
    return fetch(url + '/me', {
        headers : {
            Authorization: 'bearer ' + myCookie,
            accept : 'application/json'
        }
    }).then(res => {
        if(res.ok){
            return res.json();
        }
        else{
            throw '로그인 실패'
        }
    }).catch(err=>{
        throw '로그인실패'
    })
}
function* getUser(action){
    try{
        const result = yield call(getUserAPI, action.data)
        
        yield put({
            type : GET_MYDATA_SUCCESS,
            userName : result.user.userName,
            userId : result.user.userId,
            userEmail : result.user.email,
            userProfileImage : result.user.profileImage
        })

    }catch(e){
        console.error(e)
        yield put({
            type : GET_MYDATA_FAILURE,
            error : e
        })
        Router.push('/error/500')
    }
}

function * watchGetUser(){
    yield takeEvery(GET_MYDATA_REQUEST, getUser)
}

function userLoginAPI(userData){
    
    
    
    
    return axios.post(`${url}/getToken`, {email : userData.email, password : userData.password})
        .catch(err=>{
            throw '로그인실패'
        })
    //로그인의 에러처리
}

function* userLogin(action){
    try{

        const userData = {
            email : action.email,
            password : action.password
        }
        
        const loginResult = yield call(userLoginAPI, userData)
        
        const userToken = loginResult.data.token
        cookies.setCookie('user-token', userToken, 7);

        const getUserResult = yield call(getUserAPI, userToken)
        
        yield put({
            type : USER_LOGIN_SUCCESS,
            userToken : userToken,
            userName : getUserResult.user.userName,
            userId : getUserResult.user.userId,
            userEmail : getUserResult.user.email,
            userProfileImage : getUserResult.user.profileImage
        })        
        
    }catch(e){
        
        //에러 코드에 따라서 비밀번호 틀리게할껀지 
        //이메일의문제일지 결정
        yield put({
            type : USER_LOGIN_FAILURE,
            error : e
        })
    }
}

function* userLogout(action){
    try{
        var userToken = cookies.getCookie('user-token');
        if(userToken != '' && userToken != undefined){
            cookies.deleteCookie('user-token');

        }

        yield put({
            type : USER_LOGOUT_SUCCESS,
            userToken : '',
            userName : '',
            userId : '',
            userEmail : '',
            userProfileImage : '',
        })
    }
    catch(e){
        yield put({
            type : USER_LOGOUT_FAILURE,
            userToken : '',
            userName : '',
            userId : '',
            userEmail : '',
            userProfileImage : '',
        })
    }
}

function * watchUserLogin(){
    yield takeLatest(USER_LOGIN_REQUEST, userLogin)
}
function * watchUserLogout(){
    yield takeLatest(USER_LOGOUT_REQUEST, userLogout)
}
function getPortFolioApi(userToken){
    //return axios.get() 포트폴리오 가져오는 리스트 ㄲ
}
function * getPortFolio(action){
    try{    
        const result = yield(getPortFolioApi, action.data)
        yield put({
            type : GET_MYPORTFOLIO_SUCCESS,
            data : result.data
        })
    }catch(err){
        //가져오기 실패시 어케할까요??? ㅎㅎ
        yield put({
            type : GET_MYPORTFOLIO_FAILURE,
            err : err
        })

    }
}
function * watchGetPortFolio(){
    yield takeLatest(GET_MYPORTFOLIO_REQUEST, getPortFolio)
}

function * afterUserLogin(action){
    yield put({
        type : GET_FAVORITE_REQUEST
    })
}

function * watchUserLoginSuccess(){
    yield takeLatest(USER_LOGIN_SUCCESS, afterUserLogin)
}

function * afterUserLogout(action){
    yield put({
        type : GET_FAVORITE_FLUSH
    })
}

function * watchUserLogoutSuccess(){
    yield takeLatest(USER_LOGOUT_SUCCESS, afterUserLogout)
}

function *  afterGetMydata(action){
    yield put({
        type : GET_FAVORITE_REQUEST,
        userToken : action.userToken
    })
}

function * watchUserMydataSuccess(){
    yield takeLatest(GET_MYDATA_SUCCESS, afterGetMydata)
}


export default function* userSaga(){
    yield all([
        fork(watchGetUser),
        fork(watchUserLogin),
        fork(watchUserLogout),
        fork(watchGetPortFolio),
        fork(watchUserLoginSuccess),
        fork(watchUserLogoutSuccess),
        fork(watchUserMydataSuccess)
        
    ])
}