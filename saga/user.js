import {all, delay,fork, takeEvery,takeLatest, call,put,take} from 'redux-saga/effects'
import { GET_MYDATA_REQUEST, GET_MYDATA_FAILURE, GET_MYDATA_SUCCESS,
    USER_LOGIN_REQUEST,USER_LOGIN_FAILURE,USER_LOGIN_SUCCESS} from '../action'
import axios from 'axios'
function getUserAPI(myCookie){
    //axios.get('/로그인api', {headers :{autholrize : myCookie}})
    document.cookie = `userToken=삐리빠라뽀`
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
    }
}

function * watchGetUser(){
    yield takeEvery(GET_MYDATA_REQUEST, getUser)
}

function userLoginAPI(userData){
    //axios.get('/로그인api', {headers :{autholrize : myCookie}})
    
    //return axios.post('/로그인api', {email : userData.email, password : userData.password}) 이렇게 써요
    document.cookie = `usertoken = 삐리빠라뽀;`
    return {userToken : "삐리빠라뽀", userNickName : "김태경", userId : "scd1212@naver.com"}
    //로그인의 에러처리
}

function* userLogin(action){
    try{
        
        const userData = {
            email : action.email,
            password : action.password
        }
        console.log(userData)
        const result = yield call(userLoginAPI, userData)
        
        yield put({
            type : USER_LOGIN_SUCCESS,
            userToken : result.userToken,
            userNickName : result.userNickName,
            userId : result.userId
        })
    }catch(e){
        console.error(e)
        //에러 코드에 따라서 비밀번호 틀리게할껀지 
        //이메일의문제일지 결정
        yield put({
            type : USER_LOGIN_FAILURE,
            error : e
        })
    }
}

function * watchUserLogin(){
    yield takeEvery(USER_LOGIN_REQUEST, userLogin)
}
export default function* userSaga(){
    yield all([
        fork(watchGetUser),
        fork(watchUserLogin)

    ])
}