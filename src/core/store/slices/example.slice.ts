import { createSlice } from '@reduxjs/toolkit';

interface IExampleState {
  message: string;
}

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    message: 'Hello, World!'
  } as IExampleState,
  reducers: {
    setMessage: (state: IExampleState) => {
      state.message = 'Hola, Mundo!';

      return state;
    }
  }
});

export const { setMessage } = exampleSlice.actions;

export default exampleSlice.reducer;
