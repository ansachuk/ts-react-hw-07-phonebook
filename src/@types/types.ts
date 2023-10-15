import store from "../redux/store";

export type Contact = {
	name: string;
	phone: string;
	id: string;
	createdAt: string;
};

export type ContactsState = {
	items: Contact[];
	isLoading: boolean;
	error: Error | null;
};

export type FilterState = { filter: "" };

export type AppState = {
	contacts: ContactsState;
	filter: string;
};

export type AppDispatch = typeof store.dispatch;
