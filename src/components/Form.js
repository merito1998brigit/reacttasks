import React,{useState,useContext,useEffect} from 'react'
import { useForm } from "react-hook-form";
import { GlobalContext } from "../context/GlobalState";
export default function Form() {
    const [name,setName]=useState("");
    const [mail,setMail]=useState("");
    const [currentData, setCurrentData] = useState(null);
    const {addData,updateData,selected,details} = useContext(GlobalContext)
    const { register, handleSubmit,errors } = useForm();

    const OnSubmit = () => { 
        const Data={
            id:Math.floor(Math.random()* 100000000),
            name:name,
            email:mail
        }
         if (currentData == null) {
            addData(Data);
            setName("");
            setMail("");
         }   
         else  {
             currentData.map(data=>{
                 const newData={
                     id:data.id,
                     name:name,
                     email:mail
                 }
                 updateData(newData);
             })
         }
    }
    
   useEffect(()=>{
       if(selected.length != 0){
          selected.map(data=>{
             setName(data.name);
             setMail(data.email); 
          })
          setCurrentData(selected);
       }
    },[selected])
    return (
        <div className="col-6 form">
             <div className="form-field">
                 <div className="text-center form-header">
                     <h3>Form Submit</h3>
                 </div>
                 <div className="form-wrapper">
                  <form onSubmit={handleSubmit(OnSubmit)} >
                      <div className="form-row my-2">
                          <div className="col">
                             <label className="pl-5">Name</label>
                          </div>
                          <div className="col">
                             <input type="text" name="Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"
                             ref={register({ required: true, maxLength: 20 })}/>
                             <div style={{color:"red"}}>{errors.Name && 'name is required!' }</div>
                          </div>
                      </div>
                      <div className="form-row">
                          <div className="col text-center">
                             <label className="pl-5">E-mail</label>
                          </div>
                          <div className="col">
                             <input type="text" name="Email" className="form-control" value={mail} onChange={(e)=>setMail(e.target.value)} placeholder="Enter your email"
                             ref={register({required:true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}/>
                               <div style={{color:"red"}}>{errors.Email && 'enter correct e-mail address!' }</div>
                          </div>
                      </div>
                      <div className="form-row justify-content-center align-items-center pt-4">
                           <button type="submit" id="update" className="btn btn-primary btn-sm">Submit</button>
                      </div>
                  </form>
                </div>  
             </div>
        </div>
    )
}
