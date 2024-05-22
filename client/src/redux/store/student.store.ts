import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

import studentSlice from "../slice/student.slice";
import lecturerSlice from "../slice/lecturer.slice";

export const store: ToolkitStore = configureStore({
  reducer: {
    student: studentSlice,
    lecturer: lecturerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
