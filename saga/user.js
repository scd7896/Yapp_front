import {all, delay,fork, takeEvery,takeLatest, call,put,take} from 'redux-saga/effects'
import { GET_MYDATA_REQUEST, GET_MYDATA_FAILURE, GET_MYDATA_SUCCESS,
    USER_LOGIN_REQUEST,USER_LOGIN_FAILURE,USER_LOGIN_SUCCESS, GET_MYPORTFOLIO_REQUEST, GET_MYPORTFOLIO_SUCCESS, GET_MYPORTFOLIO_FAILURE} from '../action'
import axios from 'axios'
import fetch from 'isomorphic-unfetch'
import url from '../url'
import cookies from '../methods/cookies'

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

function * watchUserLogin(){
    yield takeLatest(USER_LOGIN_REQUEST, userLogin)
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
export default function* userSaga(){
    yield all([
        fork(watchGetUser),
        fork(watchUserLogin),
        fork(watchGetPortFolio)
        
    ])
}