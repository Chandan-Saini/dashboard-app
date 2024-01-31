import slice, { AuthState } from './auth.slice';

interface RootState {
  [slice.name]: AuthState;
}

const selectSlice = (state: RootState) => state[slice.name];

const selectUser = (state: RootState) => selectSlice(state).user;

const selectToken = (state: RootState) => selectSlice(state).token;

export { selectUser, selectToken };
