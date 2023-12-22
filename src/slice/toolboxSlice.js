import { createSlice } from "@reduxjs/toolkit";
import { MenuItems, Colors } from "@/constant";

const initialState = {
  [MenuItems.PENCIL]: {
    color: Colors.BLACK,
    size: 3,
  },
  [MenuItems.ERASER]: {
    color: Colors.WHITE,
    size: 3,
  },
  [MenuItems.UNDO]: {},
  [MenuItems.REDO]: {},
  [MenuItems.DOWNLOAD]: {},
};

export const toolboxSlice = createSlice({
  name: "toolbox",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state[action.payload.item].color = action.payload.color;
    },
    changeBrushSize: (state, action) => {
      state[action.payload.item].size = action.payload.size;
    },
  },
});

export const { changeColor, changeBrushSize } = toolboxSlice.actions;
export default toolboxSlice.reducer;
