import { ContactsState } from "../@types/types";

interface RootState {
	contacts: ContactsState;
	filter: string;
}

export const getContacts = ({ contacts }: RootState) => contacts.items;
export const getIsLoading = ({ contacts }: RootState) => contacts.isLoading;
export const getError = ({ contacts }: RootState) => contacts.error;

export const getFilter = ({ filter }: RootState) => filter;
