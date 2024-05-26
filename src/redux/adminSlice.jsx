import { createSlice } from '@reduxjs/toolkit'
import { adminLocalStorage } from '../services/LocalService';

const initialState = {
    adminInfo: adminLocalStorage?.get() || null,
}

const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    setlogin: (state, action) => { 
        state.adminInfo = action.payload
     }
  }
});

export const {setlogin} = adminSlice.actions

export default adminSlice.reducer