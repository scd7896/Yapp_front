import produce from 'immer'
import {ADD_SELECTORS_CONTENT, REMOVE_SELECTORS_CONTENT} from '../action'
const initialState ={
    selects : []
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
        }
    })
    
}

export default button;