import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
	name: "mode",
	initialState: {
		value: false,
	},
	reducers: {
		modeChange: (state, action) => {
			state.value = action.payload;
		},
	},
});

const { actions, reducer } = modeSlice;
export const { modeChange } = actions;
export default reducer;
