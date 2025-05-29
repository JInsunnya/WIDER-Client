import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signupApi } from '../api/signup/SignupApi';

export const signup = createAsyncThunk('user/signup', async (signupData, { rejectWithValue }) => {
    try {
        const result = await signupApi(signupData);
        return result;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

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
                state.id = action.payload.user.userId;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.loading = false;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
