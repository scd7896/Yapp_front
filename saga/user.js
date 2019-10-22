import {all, delay,fork, takeEvery,takeLatest, call,put,take} from 'redux-saga/effects'
import { GET_MYDATA_REQUEST, GET_MYDATA_FAILURE, GET_MYDATA_SUCCESS } from '../action'
import axios from 'axios'
function getUserAPI(myCookie){
    //axios.get('/로그인api', {headers :{autholrize : myCookie}})
    return {userToken : myCookie, userId : '유저아이디', userNickName : "유저닉네임"}
    //return axios.get('/로그인api', {headers :{autholrize : myCookie}}) 이렇게 써요
}
function* getUser(action){
    try{
        console.log('요청 보내짐', action.data)
        
        const result = yield call(getUserAPI, action.data)
        throw '대단한에러';
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
export default function* userSaga(){
    yield all([
        fork(watchGetUser)

    ])
}