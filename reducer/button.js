import produce from 'immer'
import {NEXT_APPLY_MODAL, PREV_APPLY_MODAL,OPEN_APPLY_MODAL,CLOSE_APPLY_MODAL,
    ADD_SELECTORS_CONTENT, REMOVE_SELECTORS_CONTENT, SET_SELECTED_PAGES, CLEAR_SELECTED_KYEWORD, OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL} from '../action'
const initialState ={
    selects : [],
    selectPage : "",
    applyModalLevel : 1, 
    visible : false,
    loginVisible : false,
    isLoginModal : true
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

            case OPEN_APPLY_MODAL :
                draft.visible = true;
                draft.applyModalLevel = 1;
                break;

            case CLOSE_APPLY_MODAL :
                draft.visible = false;
                draft.applyModalLevel = 1;
                break;

            case OPEN_LOGIN_MODAL :
                draft.loginVisible = true;
                break;

            case CLOSE_LOGIN_MODAL :
                draft.loginVisible = false;
                break;

            default :
                break;
        }
    })
    
}

export default button;