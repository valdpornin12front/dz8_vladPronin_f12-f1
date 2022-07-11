import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { postUsers } from "../../store/userPostSlice";


function PostPage() {
   


    const [name , setName] = useState('')
    const [username , setUserame] = useState('')
    const message = useSelector(state => state.userPostReducer.message)
    const error = useSelector(state=> state.userPostReducer.error)
    const status = useSelector(state=> state.userPostReducer.status)
    const dispatch = useDispatch()
    const handleUsers=(e) =>{
        const data ={
            name:name,
            username:username
        }
        dispatch(postUsers(data))
    }


  

    return(
        <div>

            <form>
                <input
                    type="text"
                    placeholder="name"
                    onChange={e=>setName(e.target.value)}
                  
                    />
                  <input 
                    type="text"
                    placeholder="username"
                    onChange={e=>setUserame(e.target.value)}

                    
                    />
            </form>
            <button onClick={handleUsers}>createUser</button>
            
             { status ===201
             ?
                <div>{message}</div>
                :
                <div>{error}</div>

            }   
            
        </div>
    )
}

export  default PostPage;