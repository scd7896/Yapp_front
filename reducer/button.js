import produce from 'immer'
import {NEXT_APPLY_MODAL, PREV_APPLY_MODAL,
    ADD_SELECTORS_CONTENT, REMOVE_SELECTORS_CONTENT, SET_SELECTED_PAGES, CLEAR_SELECTED_KYEWORD} from '../action'
const initialState ={
    selects : [],
    selectPage : "",
    applyModalLevel : 0, 
}
const button = (state = initialState , action) =>{
    return  produce(state, (draft)=>{
        switch(action.type) {
            case ADD_SELECTORS_CONTENT:
                draft.selects.push(action.data)
                break;  
            case REMOVE_SELECTORS_CONTENT :
                draft.selects = draft.selects.filter((e)=> e !== action.data)
                break;
            case SET_SELECTED_PAGES :
                draft.selectPage = action.data;
                break;
            case CLEAR_SELECTED_KYEWORD :
                draft.selects = [];
                break;
            case NEXT_APPLY_MODAL :
                draft.applyModalLevel++;
                break;
            case PREV_APPLY_MODAL :
                draft.applyModalLevel--;
                break;
        }
    })
    
}

export default button;