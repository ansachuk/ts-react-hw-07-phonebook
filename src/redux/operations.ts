import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { Contact } from "../@types/types";

axios.defaults.baseURL = "https://6508416c56db83a34d9c01ad.mockapi.io";

const stateDefaultName = "contacts";

const fetchContacts = createAsyncThunk(`${stateDefaultName}/fetchAll`, async (_, { rejectWithValue }): Promise<Contact[]> => {
	try {
		const { data } = await axios.get(stateDefaultName);

		return data;
	} catch (e) {
		throw rejectWithValue((e as Error).message);
	}
});

const addContact = createAsyncThunk(
	`${stateDefaultName}/addTask`,
	async ({ name, phone }: Omit<Contact, "id">, { rejectWithValue }): Promise<Contact> => {
		try {
			const { data } = await axios.post(stateDefaultName, { name, phone });
			return data;
		} catch (e) {
			throw rejectWithValue((e as Error).message);
		}
	},
);

const deleteContact = createAsyncThunk(`${stateDefaultName}/deleteContact`, async (id, { rejectWithValue }): Promise<Contact> => {
	try {
		const { data } = await axios.delete(`${stateDefaultName}/${id}`);
		return data;
	} catch (e) {
		throw rejectWithValue((e as Error).message);
	}
});

export { fetchContacts, addContact, deleteContact };
