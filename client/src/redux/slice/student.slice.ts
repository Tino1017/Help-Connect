import { createSlice } from "@reduxjs/toolkit";



interface IInitialState {
  studentID: string;
  studentUsername: string;
  studentEmail: string;
  studentPin: string;
}

const initialState: IInitialState = {
  studentID : "",
  studentUsername: "",
  studentEmail: "",
  studentPin: ""
};

export const studentSlice = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {
    SetStudentID: (state, action) => {
      state.studentID = action.payload;
    },
    SetStudentUsername: (state, action) => {
      state.studentUsername += action.payload;
    },
    SetStudentEmail: (state, action) => {
      state.studentEmail = action.payload;
    },
    SetStudentPin: (state, action) => {
      state.studentPin = action.payload;
    }
  },
});

export const { SetStudentID, SetStudentUsername, SetStudentEmail, SetStudentPin } = studentSlice.actions;

export default studentSlice.reducer;
