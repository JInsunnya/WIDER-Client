import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signupApi } from '../api/signup/SignupApi';
import { loginApi } from '../api/login/LoginApi';
import { changePasswordApi } from '../api/user/changePasswordApi';

export const signup = createAsyncThunk('user/signup', async (signupData, { rejectWithValue }) => {
    try {
        const result = await signupApi(signupData);
        return result;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: '서버 응답 없음' });
    }
});

export const login = createAsyncThunk('user/login', async (loginData, { rejectWithValue }) => {
    try {
        const result = await loginApi(loginData);
        return result;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: '서버 응답 없음' });
    }
});

export const changePassword = createAsyncThunk(
    'user/changePassword',
    async ({ passwordData, token }, { rejectWithValue }) => {
        try {
            const result = await changePasswordApi(passwordData, token);
            return result;
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: '서버 응답 없음' });
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: '',
        token: '',
        isLoggedIn: false,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.id = '';
            state.token = '';
            state.isLoggedIn = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                const user = action.payload?.user;
                const token = action.payload?.token;

                if (user && token) {
                    state.id = user.userId;
                    state.token = token;
                    state.isLoggedIn = true;
                } else {
                    state.error = '회원가입 응답 데이터 형식 오류';
                }
                state.loading = false;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(login.fulfilled, (state, action) => {
                const user = action.payload?.user;
                const token = action.payload?.token;

                if (user && token) {
                    state.id = user.userId;
                    state.token = token;
                    state.isLoggedIn = true;
                } else {
                    state.error = '로그인 응답 데이터 형식 오류';
                }
                state.loading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.error = null;
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
