// import {
//     all,
//     delay,
//     fork,
//     takeEvery,
//     takeLatest,
//     call,
//     put,
//     take
// } from "redux-saga/effects";
// import {
//     GET_QUESTION_SUCCESS,
//     GET_QUESTION_FAILURE,
//     GET_QUESTION_REQUEST
// } from "../action";

// import axios from "axios";
// import url from "../url";
// import { useSelector } from 'react-redux'

// const QuestionAPI = (token) => {
//     var { apply } = useSelector(state => state);
//     return axios.get(`${url}/${apply.postId}/question`, {
//         headers: {
//             Authorization: `bearer ${token}`
//         }
//     })
// }
// function* doingGetQuestion(action) {
//     try {
//         const result = yield call(QuestionAPI, action);
//         yield put({
//             type: GET_QUESTION_SUCCESS,
//             data: result.data
//         });
//     } catch (e) {
//         yield put({
//             type: GET_QUESTION_FAILURE
//         });
//     }
// }
// function* getQuestion() {
//     yield takeEvery(GET_QUESTION_REQUEST, doingGetQuestion);
// }

// export default function* QuestionListSaga() {
//     yield all([fork(getQuestion)]);
// }
