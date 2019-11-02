import produce from 'immer'
import { ADD_KEYWORD_LIST, DEL_KEYWORD_LIST, DEL_KEYWORDS_ALL } from '../action';

const initialProps = {
    selectList : []
}

const keywords = (state = initialProps, action) =>{
    return produce(state, (draft)=>{
        switch(action.type){
            case ADD_KEYWORD_LIST :
                draft.selectList.push(action.data)
                break;

            case DEL_KEYWORD_LIST :
                draft.selectList = draft.selectList.filter((el)=> el !== action.data)
                break;
            case DEL_KEYWORDS_ALL :
                draft.selectList = []
                break;
            default :
                break;
        }
    })
}

export default keywords