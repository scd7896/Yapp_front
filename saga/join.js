import baseURL from '../url'
import {all, delay,fork, takeEvery,takeLatest, call,put,take} from 'redux-saga/effects'
import {USER_JOIN_REQUEST, USER_JOIN_SUCCESS, USER_JOIN_FAILURE} from '../action'
import axios from 'axios'
import cookies from '../methods/cookies'

function getUserAPI(myCookie){
    return fetch(baseURL + '/me', {
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

function userJoinAPI(userData){
    
    return axios.post(`${baseURL}/join`, 
            {
                name : userData.name,
                email : userData.email, 
                password : userData.password,
                password2 : userData.password2
            }
        ).catch(err=>{
            throw '로그인실패'
        })
}

function* userJoin(action){
    try{
        
        const userData = {
            name : action.name,
            email : action.email,
            password : action.password,
            password2 : action.password2
        }

        const loginResult = yield call(userJoinAPI, userData)
        
        const userToken = loginResult.data.token
        cookies.setCookie('user-token', userToken, 7);

        const getUserResult = yield call(getUserAPI, userToken)
        
        yield put({
            type : USER_JOIN_SUCCESS,
            userToken : loginResult.data.token,
            userName : getUserResult.user.name,
            userId : getUserResult.user.userId,
            userEmail : getUserResult.user.email,
            userProfileImage : getUserResult.user.profileImage
        })        
        
    }catch(e){
        //에러 코드에 따라서 비밀번호 틀리게할껀지 
        //이메일의문제일지 결정
        yield put({
            type : USER_JOIN_FAILURE,
            error : e
        })
    }
}

function * watchUserJoin(){
    yield takeLatest(USER_JOIN_REQUEST, userJoin)
}

export default function* joinSaga(){
    yield all([
        fork(watchUserJoin)
    ])
}