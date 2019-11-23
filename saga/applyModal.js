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
import {
    PROJECT_APPLY_SUCCESS,
    PROJECT_APPLY_FAILURE,
    PROJECT_APPLY_REQUEST
} from "../action";

import axios from "axios";
import url from "../url";

function applyAPI(action) {
    return axios.get(
        `${url}/projects/1/question`,
        {
            interviewQuestions: [
                {
                    "sn": 1,
                    "content": "일주일에 몇 회정도 참여 가능하신가요?",
                    "projectId": 1
                },
                {
                    "sn": 2,
                    "content": "개발자와 협업 경험이 있으신가요?",
                    "projectId": 1
                }
            ]
        },
        {
            headers: {
                Authorization: `bearer ${action.token}`
            }
        }
    );
}
function* doingApplyProject(action) {
    try {
        const result = yield call(applyAPI, action);
        yield put({
            type: PROJECT_APPLY_SUCCESS,
            data: result.data
        });
    } catch (e) {
        yield put({
            type: PROJECT_APPLY_FAILURE
        });
    }
}
function* applyProject() {
    yield takeEvery(PROJECT_APPLY_REQUEST, doingApplyProject);
}

export default function* applySaga() {
    yield all([fork(applyProject)]);
}
