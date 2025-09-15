import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    value:0,
    data:[],
    error:null,
    status:"idle"
}



export const fetchData = createAsyncThunk(
    "counter/fetchData",
    async function (){
        try{
            console.time("mixed")
            const user1Res = await axios.get("https://jsonplaceholder.typicode.com/users/1")
            
            console.log(user1Res.data)
            const user1 = user1Res.data
            
            console.time("parallelTasks")
            
            const postApi = axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user1.id}`)
            const albumApi = axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${user1.id}`)

            const [resPost,resAlbum] = await Promise.all([postApi,albumApi])

            const posts = resPost.data
            const albums = resAlbum.data

            posts.slice(0,3).map((item,index)=>{
                console.log(`${index + 1 }: ${item.title}`)
            })
            albums.slice(0,3).map((item,index)=>{
                console.log(`${index + 1 }: ${item.title}`)
            })
            
            console.timeEnd("parallelTasks")
            console.timeEnd("mixed")
            return {user1,posts,albums}




            
        }catch(err){
            console.error(`${err.message}: http error ${err.response?.status} ${err.response?.statusText}`)
        }finally{
            console.log("all api ran")
        }
    }
)



const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state)=>{
            state.value = state.value +1 
        },
        decrement: (state)=>{
            state.value = Math.max((state.value -1),0) 
        },
        invcrementByAmount: (state,action) =>{
            state.value = state.value + action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.status = "loading"
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.status = "fulfilled"
            state.data = action.payload
            
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.status ="rejected"
            state.error = action.error.message
        })
    }
})




export const {increment,decrement,invcrementByAmount} = counterSlice.actions

export default counterSlice.reducer