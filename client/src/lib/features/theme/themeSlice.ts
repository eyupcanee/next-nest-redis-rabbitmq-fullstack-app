import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
