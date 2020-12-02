import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer';

//initial state

const initialState={
    details:[]
}

// create context

export const GlobalContext=createContext(initialState);

//provider component

export const GlobalProvider = ({children})=>{
     const [state,dispatch]=useReducer(AppReducer,initialState);

     //actions
     function deletedata(id){
         dispatch({
            type:'DELETE_DATA',
            payload:id
         }) 
     }

     function addData(detail){
        dispatch({
           type:'ADD_DATA',
           payload:detail
        })
     }

        function updateData(detail){
            dispatch({         
                 type:'UPDATE_DATA',
                 payload:detail
              })
        
        
        
    }
     return(
         <GlobalContext.Provider value={{
             details:state.details,
             deletedata,
             addData,
             updateData
         }}>
             {children}
         </GlobalContext.Provider>
     )
}