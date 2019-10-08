import produce from 'immer'
import {ADD_SELECTORS_CONTENT, REMOVE_SELECTORS_CONTENT, SET_SELECTED_PAGES} from '../action'
const initialState ={
    selects : [],
    selectPage : ""
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
        }
    })
    
}

export default button;