import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";
import { ContactsState } from "../@types/types";

const initialState = {
	items: [],
	isLoading: false,
	error: null,
} as ContactsState;

const handleLoading = (state: ContactsState) => {
	state.isLoading = true;
};

const handleRejected = (state: ContactsState, action: PayloadAction<Error>) => {
	state.isLoading = false;
	state.error = action.payload;
};

const handleFullfilled = (state: ContactsState) => {
	state.isLoading = false;
	state.error = null;
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState,

	reducers: {},

	extraReducers: builder => {
		builder
			.addCase(fetchContacts.fulfilled, (state, { payload }) => {
				handleFullfilled(state);
				state.items = payload;
			})
			.addCase(addContact.fulfilled, (state, { payload }) => {
				handleFullfilled(state);
				state.items.push(payload);
			})
			.addCase(deleteContact.fulfilled, (state, { payload }) => {
				handleFullfilled(state);
				state.items = state.items.filter(({ id }) => id !== payload.id);
			})
			.addMatcher(action => action.type.endsWith("/pending"), handleLoading)

			.addMatcher(action => action.type.endsWith("/rejected"), handleRejected);
	},
});

export default contactsSlice.reducer;
