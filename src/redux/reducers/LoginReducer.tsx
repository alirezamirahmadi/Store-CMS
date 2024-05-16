import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import apiRequests from "../../services/axios/AxiosConfig";
import type { UserType } from "../../type/UserType";
const getLogin = createAsyncThunk(
  'login/GET',
  async (token: string) => {
    const result = await apiRequests.get(`LoginData?token=${token}`);
    return result.data.length === 1 ? { id: result.data[0].id, isLogin: true, token, userInfo: result.data[0].userInfo } : result.data;
  }
)

const postLogin = createAsyncThunk(
  'login/POST',
  async (userInfo: UserType) => {
    await apiRequests.post('LoginData', { isLogin: true, token: userInfo.phone, userInfo });
  }
)

const logout = createAsyncThunk(
  'login/DELETE',
  async (loginId: string) => {
    await apiRequests.delete(`LoginData/${loginId}`)
  }
)

const loginSlice = createSlice({
  name: 'login',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLogin.fulfilled, (state, action) => action.payload);
  }

})


export default loginSlice.reducer;

export {
  getLogin,
  postLogin,
  logout
}