import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const baseurl = 'https://africafe.onrender.com' ;




const initialState = {
    messages: "" ,
    status: "",
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

    },
    extraReducers:{

    }
});

export default authSlice.reducer