import {all, delay,fork, takeEvery,takeLatest, call,put,take} from 'redux-saga/effects'
import { GET_MYDATA_REQUEST, GET_MYDATA_FAILURE, GET_MYDATA_SUCCESS,
    USER_LOGIN_REQUEST,USER_LOGIN_FAILURE,USER_LOGIN_SUCCESS} from '../action'
import axios from 'axios'
import url from '../url'

function getUserAPI(myCookie){
    
    
    return {userToken : myCookie, userId : '유저아이디', userNickName : "유저닉네임"}
    //return axios.get('/로그인api', {headers :{autholrize : myCookie}}) 이렇게 써요
}
function* getUser(action){
    try{
        
        
        const result = yield call(getUserAPI, action.data)
        
        yield put({
            type : GET_MYDATA_SUCCESS,
            userToken : result.userToken,
            userNickName : result.userNickName,
            userId : result.userId
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
        
        const result = yield call(userLoginAPI, userData)
        
        document.cookie = `user-token=${result.data.token}`
        
        yield put({
            type : USER_LOGIN_SUCCESS,
            userToken : result.data.token,
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
export default function* userSaga(){
    yield all([
        fork(watchGetUser),
        fork(watchUserLogin)
        
    ])
}