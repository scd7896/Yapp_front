import produce from 'immer'
import {SET_APPLYQNA_DATA} from '../action'
const initialState ={
    position : '',
    answers :[]
}

const apply = (state = initialState, action)=>{
    return produce(state, (draft)=>{
        switch(action.type){
            case SET_APPLYQNA_DATA :
                draft.position = action.position;
                draft.answers = action.answers;
                break;
                
            default :
                break;
        }
    })
}

export default apply;