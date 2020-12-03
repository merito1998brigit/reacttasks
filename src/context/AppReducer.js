export default (state,action)=>{
    switch(action.type){
        case 'DELETE_DATA':
            return{
                ...state,
                details:state.details.filter(detail=>detail.id !== action.payload)
            }
        case 'ADD_DATA':
            return{
                ...state,
                details:[action.payload,...state.details]
            }  
        case 'ADDSELECTED_DATA':
                return{
                    ...state,
                    selected:[action.payload]
                } 
        case 'UPDATE_DATA':
            return{
                ...state,
                details:state.details.map(detail=>detail.id == action.payload.id ? action.payload : detail)
            }  
        default:
            return state;
    }
}