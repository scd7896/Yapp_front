import {
  all,
  delay,
  fork,
  takeEvery,
  takeLatest,
  call,
  put,
  take
} from "redux-saga/effects";


import axios from "axios";
import url from "../url";
import { POST_PROJECT_REQUEST, POST_PROJECT_FAILURE, POST_PROJECT_SUCCESS, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE, PATCH_PROJECT_REQUEST, PATCH_PROJECT_FAILURE, PATCH_PROJECT_SUCCESS } from "../action/enrollment";
const postProjectAPI = (data)=>{
  
  const {projectQuestion,projectNowTeam, projectImage} = data
  const dataQuestion = projectQuestion.flat()
  const dataNowTeam = projectNowTeam[0] *100 + projectNowTeam[1] * 10 + projectNowTeam[2]
  const dataFile = projectImage.file
  const formData = new FormData()
  dataQuestion.map((el)=>{
    if(el.text !== ""){
      
      const question = JSON.stringify({role : el.id, content : el.text})
      formData.append("interviewQuestions",question)
    }
  })
  for(let i = 0 ; i<data.projectKeyword.length; i++){
    formData.append("keywords", data.projectKeyword[i])
  }

  formData.append("title", data.projectTitle)
  formData.append("content",data.projectContent)
  formData.append("role", data.projectPosition)
  formData.append("step", data.projectLevel)
  formData.append("location", data.projectRegion)
  formData.append("thumbnailImage", dataFile)
  formData.append("expectedPeriod", data.projectLong)
  
  formData.append("currentMember" , dataNowTeam)
  /*
    {
  "title": "string",
  "content": "string",
  "role": 0,
  "step": 0,
  "location": 0,
  "thumbnailImage": "string",
  "expectedPeriod": 0,
  "interviewQuestions": [
    {
      "content": "참여할 것입니까?"
    }
  ]
}
  */
  console.log('폼데이터', formData)
  return axios.post(`${url}/projects`, formData, {
    headers :{
      "Access-Control-Allow-Origin" : "*",
      "Content-Type" : 'multipart/form-data',
      Authorization: `bearer ${data.userToken}`
    }
  }).catch((err)=> console.log(err))
  return {data : 1}
}
function * postProject(action){
  try{
    
    const result = yield call(postProjectAPI, action.data)
    console.log('포스트등록 결과 ', result.data)
    yield put({
      type : POST_PROJECT_SUCCESS,
      data : result.data
    })
  }catch(e){
    yield put({
      type : POST_PROJECT_FAILURE,
      error : e
    })
  }
}
function * watchPostProject(){
  yield takeEvery(POST_PROJECT_REQUEST, postProject)
}
const getProjectAPI = (id)=>{
  return axios.get(`${url}/projects/${id}`)
}

const getQuestionAPI = id =>{
  return axios.get(`${url}/projects/${id}/question`)
}
function * getProject (action){
  try{
    const result = yield call(getProjectAPI, action.data);
    console.log(result.data)
    const questions = yield call(getQuestionAPI, action.data)
    yield put({
      type : GET_PROJECT_SUCCESS,
      data : result.data,
      questions : questions.data
      
    })
  }catch(err){
    console.log(err)
    yield put({
      type : GET_PROJECT_FAILURE,
      err : err
    })
  }
}
function * watchGetProject(){
  yield takeEvery(GET_PROJECT_REQUEST, getProject)
}

const patchProjectAPI = (data)=>{

  const {projectQuestion,projectNowTeam, projectImage} = data
  const dataQuestion = projectQuestion.flat()
  const dataNowTeam = projectNowTeam[0] *100 + projectNowTeam[1] * 10 + projectNowTeam[2]
  const dataFile = projectImage.file
  const formData = new FormData()
  // dataQuestion.map((el)=>{
  //   if(el.text !== ""){
  //     formData.append("interviewQuestions",{"content" : el.text, "sn": el.id})
  //   }
  // })
  for(let i = 0 ; i<data.projectKeyword.length; i++){
    formData.append("keywords", data.projectKeyword[i])
  }

  formData.append("title", data.projectTitle)
  formData.append("content",data.projectContent)
  formData.append("role", data.projectPosition)
  formData.append("step", data.projectLevel)
  formData.append("location", data.projectRegion)
  formData.append("thumbnailImage", dataFile)
  formData.append("expectedPeriod", data.projectLong)
  formData.append("currentMember" , dataNowTeam)


  
  console.log('data', data)
  return axios.patch(`${url}/projects/${data.resId}`, formData, {
    headers :{
      Authorization: `bearer ${data.userToken}`
    }
  }).catch((err)=> console.log(err))
}

function* patchProject(action){
  try{
    const result = yield call(patchProjectAPI, action.data)
    console.log(result)
    yield put({
      type : PATCH_PROJECT_SUCCESS,
      data : result.data
    })
  }catch(err){
    yield put({
      type: PATCH_PROJECT_FAILURE,
      err : err
    })
  }
}

function* watchPatchProject(){
  yield takeEvery(PATCH_PROJECT_REQUEST, patchProject)
}
export default function* enrollSaga() {
  yield all([
    fork(watchPostProject),
    fork(watchGetProject),
    fork(watchPatchProject)
  ]);
}
