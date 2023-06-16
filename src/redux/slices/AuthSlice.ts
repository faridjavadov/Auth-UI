import { createSlice } from "@reduxjs/toolkit"

type User = {
    email:string
}

interface InitialState{
    user:User | undefined,
    token:string | undefined
}

const InitialState = {
    user:undefined,
    token:undefined
}

 const AuthSlice = createSlice({
    name:'AuthSlice',
    initialState:InitialState,
    reducers:{

    },
    extraReducers:(builder)=>{

    }
})

export default AuthSlice.reducer