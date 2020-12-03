import React,{useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";
import { X } from 'react-feather';
export default function Datadisplay({detail}) {
    const {deletedata,details,addselectedData}=useContext(GlobalContext);
    return (
       <div className="row mt-lg-2 flex-row d-flex">
           <div className="col-6"  id="datatab" key={detail.id} >
                <div className="card" onClick={()=>addselectedData(detail)}>
                    <div className=" d-flex justify-content-end align-items-end">
                       <X color="red" size={20} onClick={()=>deletedata(detail.id)}/>
                    </div>
                    <div className="card-body">
                          <p>Name: {detail.name}</p>
                          <p>E-mail: {detail.email}</p>
                    </div>
                </div>
           </div>
       </div>
    )
}
