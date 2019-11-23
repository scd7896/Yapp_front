import produce from "immer";
import {
    PROJECT_APPLY_SUCCESS,
    PROJECT_APPLY_FAILURE,
    PROJECT_APPLY_REQUEST
} from "../action";
import Router from "next/router";

const initialProps = {
    selectList: [],
    resId: null
};

const enorollment = (state = initialProps, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case PROJECT_APPLY_SUCCESS:
                draft.resId = action.data;
                setStep(2);
                break;
            default:
                break;
        }
    });
};

export default enrollment;
