import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const baseurl = 'https://africafe.onrender.com' ;




const initialState = {
    messages: "" ,
    status: '',
    data: {
      adminId: "",
      email: "",
      firstName: "",
      lastName: "",
      role: "",
      createdAt: "",
      updatedAt: ""
    } 
}

export const signUpUser = createAsyncThunk( "signUpUser", async(bodySignUp)=> {
    console.log("i go to authslice")
    console.log(bodySignUp)
  try{
    const response = await axios.post(`${baseurl}/api/v1/customers/signup-customer`, bodySignUp)
    console.log("responses", response.data)
    return response.data
  }catch (error){
    console.log(`"Error", ${error.message}`)
  }
})


const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setFirstName(state, action) {
            state.firstName = action.payload;
          },
          setLastName(state, action) {
            state.lastName = action.payload;
          },
          setEmail(state, action) {
            state.email = action.payload;
          },
          setPhoneNumber(state, action) {
            state.firstName = action.payload;
          },
          setPassword(state, action) {
            state.firstName = action.payload;
          },
    },
    extraReducers:{
     [signUpUser.pending]: (state) =>{
        state.loading = true
     },
     [signUpUser.fulfilled]: (state, {payload:{error, message}},action) =>{
        state.loading = false;
        state.user = action.payload
        if(error){
            state.error = error
        }else{
            state.message = message
        }
     },
     [signUpUser.rejected]: (state) =>{
        state.loading = true
     },
    }
});


export const { setFirstName, setLastName, setEmail, setPhoneNumber,setPassword} = authSlice.actions;
export default authSlice.reducer