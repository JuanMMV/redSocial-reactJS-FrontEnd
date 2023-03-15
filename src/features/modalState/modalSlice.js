import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modalState",
  initialState: {
    isVisible: false,
  },
  reducers: {
    //obtener la imagen full seleccionada mas su post con datos
    modalActualState: (state, action) => {
      const { isVisible } = action.payload;
      state.isVisible = isVisible;
    },
  },
});

export const { modalActualState } = modalSlice.actions;
export default modalSlice.reducer;
