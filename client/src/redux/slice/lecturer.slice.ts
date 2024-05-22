import { createSlice } from "@reduxjs/toolkit";



interface IInitialState {
  lecturerID: string;
  lecturerUsername: string;
  lecturerEmail: string;
  lecturerPin: string;
}

const initialState: IInitialState = {
  lecturerID : "",
  lecturerUsername: "",
  lecturerEmail: "",
  lecturerPin: ""
};

export const lecturerSlice = createSlice({
  name: "lecturer",
  initialState: initialState,
  reducers: {
    SetLecturerID: (state, action) => {
      state.lecturerID = action.payload;
    },
    SetLecturerUsername: (state, action) => {
      state.lecturerUsername += action.payload;
    },
    SetLecturerEmail: (state, action) => {
      state.lecturerEmail = action.payload;
    },
    SetLecturerPin: (state, action) => {
      state.lecturerPin = action.payload;
    }
  },
});

export const { SetLecturerID, SetLecturerUsername, SetLecturerEmail, SetLecturerPin } = lecturerSlice.actions;

export default lecturerSlice.reducer;
