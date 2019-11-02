import produce from 'immer'

const initialProps = {
    selectList : []
}

const keywords = (state = initialProps, action) =>{
    return produce(state, (draft)=>{
        switch(action.type){
            default :
                break;
        }
    })
}

export default keywords