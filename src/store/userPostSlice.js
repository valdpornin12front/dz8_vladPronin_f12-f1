import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const postUsers = createAsyncThunk(
    "postUsers",
    async function (form ,{rejectWithValue}) {
       
        const options = {
            method:"POST",
            header:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(form)
        }
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
            if(response.status === 201) {
                return  201
            }else if(response.status === 404){
                return 404 ;
            }
        }catch(e) {
            return rejectWithValue(e.message)
        }
    }
)








const userPostSlice = createSlice({
    name:"userPostSlice",
    initialState:{
        status:null,
        users:[],
        error: "error",
        message: "ok"
    },
    extraReducers:builder => {
        builder.addCase(postUsers.fulfilled,(state , action) =>{
            state.status = action.payload
        })
        builder.addCase(postUsers.rejected , (state , action)=>{
            state.status = action.payload
        })
    }
})


export default userPostSlice.reducer