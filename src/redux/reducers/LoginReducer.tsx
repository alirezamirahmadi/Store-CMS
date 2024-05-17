import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import apiRequests from "../../services/axios/AxiosConfig";
import type { UserType } from "../../type/UserType";
import { LoginType } from "../../type/LoginType";

const getLogin = createAsyncThunk(
  'login/GET',
  async (token: string) => {
    const result = await apiRequests.get(`LoginData?token=${token}`);
    const loginInfo: LoginType = result.data.length === 1 ? { id: result.data[0].id, isLogin: true, token, userInfo: result.data[0].userInfo } : result.data;
    return loginInfo;
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

const initValue: LoginType = { id: '', isLogin: false, token: '', userInfo: { id: '-1', firstName: '', lastName: '', phone: '', isActive:false } };

const loginSlice = createSlice({
  name: 'login',
  initialState: initValue,
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