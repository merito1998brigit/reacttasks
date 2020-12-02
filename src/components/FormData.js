import React,{useContext,useEffect} from 'react'
import { GlobalContext } from "../context/GlobalState"
import Datadisplay from './Datadisplay';
export default function () {
    const {details}=useContext(GlobalContext);
    useEffect(()=>{
      if(details.length > 0){
           document.getElementById("errorMsg").style.display="none";
          // document.getElementById("datadisplay").style.display="block";
        }
        else {
            document.getElementById("errorMsg").style.display="block";
        }
       },[details.length])
    return (
        <div className="col-6 formdata">
             <div className="container text-center justify-content-center align-items-center" id="errorMsg" style={{display:"block"}}>
                <h4>Nothing is added... fill your details and submit</h4>
             </div>
              {
                 details.map(detail=>{
                     return(
                         <div id="datadisplay">
                            <Datadisplay detail={detail} />   
                         </div>  
                     )
                 })
              }
        </div>
    )
}
