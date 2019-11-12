import produce from 'immer'
import {ADD_JOB_VALUE, SUB_JOB_VALUE} from '../action'
const initialState ={
    jobValue : 0
}

const apply = (state = initialState, action)=>{
    return produce(state, (draft)=>{
        switch(action.type){
            case ADD_JOB_VALUE :
                draft.jobValue += action.data
                break;
            case SUB_JOB_VALUE :
                draft.jobValue -= action.data
                break;
            default :
                break;
        }
    })
}

export default apply;