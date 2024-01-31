import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  token: string;
  user: { email: string, id: string, avatar: string, firstName: String, lastName: String } | null;
}

const initialState: AuthState = {
  token: '',
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.token = '';
      state.user = null;
    },
  },
});

export const { setToken, setUser, signOut } = slice.actions;
export const authReducer = slice.reducer;
export type { AuthState }
export default slice
