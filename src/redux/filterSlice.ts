import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: "" };

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setFilter: (state, { payload }) => {
			state.filter = payload;
		},
	},
});

export default filterSlice.reducer;

export const { setFilter } = filterSlice.actions;
