import produce from 'immer'
import {SET_LOGIN_MODAL,NEXT_APPLY_MODAL, PREV_APPLY_MODAL,OPEN_APPLY_MODAL,CLOSE_APPLY_MODAL,
    ADD_SELECTORS_CONTENT, REMOVE_SELECTORS_CONTENT, SET_SELECTED_PAGES, CLEAR_SELECTED_KYEWORD, OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE} from '../action'
const initialState ={
    selects : [],
    selectPage : "",
    applyModalLevel : 1, 
    visible : false,
    loginVisible : false,
    isLoginModal : 0
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
                draft.isLoginModal = 0;
                break;
            case SET_LOGIN_MODAL :
                draft.isLoginModal = action.data;
                break;
            case USER_LOGIN_SUCCESS :    
                draft.loginVisible = false;
            default :
                break;
        }
    })
    
}

export default button;