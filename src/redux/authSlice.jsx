import { createSlice } from "@reduxjs/toolkit";


// const url = '/api/citrone/user/courses'


const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error : ""
}

// const signUpUser = createAsyncThunk( "signUpUser", async()=> {
//    const response = await fetch( url , {
//     method: "post",
//     headers: {},
//     body: JSON.stringify(body),
//     return await response.json()
//    })
// })


const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers:{

    }
});

export default authSlice.reducer