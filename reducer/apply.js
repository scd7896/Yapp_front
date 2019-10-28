import produce from 'immer'
import {SET_APPLYQNA_DATA, ADD_PORTFOLIO_MODAL, DEL_PORTFOLIO_MODAL, OPEN_APPLY_MODAL, CLOSE_APPLY_MODAL} from '../action'
const initialState ={
    position : '',
    answers :[],
    selectPortFolios : [],
    postId : null
}

const apply = (state = initialState, action)=>{
    return produce(state, (draft)=>{
        switch(action.type){
            case SET_APPLYQNA_DATA :
                draft.position = action.position;
                draft.answers = action.answers;
                break;
            case ADD_PORTFOLIO_MODAL :
                draft.selectPortFolios.push(action.data)
                break;
            case DEL_PORTFOLIO_MODAL :
                draft.selectPortFolios = draft.selectPortFolios.filter((e)=>e.title!==action.data.title)
                break;
            case CLOSE_APPLY_MODAL :
                draft.postId = null;
                break;
            case OPEN_APPLY_MODAL :
                draft.postId = action.postId;
                break;
            default :
                break;
        }
    })
}

export default apply;