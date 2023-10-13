import { ContactsState } from "../@types/types";

interface RootState {
	contacts: ContactsState;
	filter: string;
}

export const selectContacts = ({ contacts }: RootState) => contacts.items;
export const selectIsLoading = ({ contacts }: RootState) => contacts.isLoading;
export const selectError = ({ contacts }: RootState) => contacts.error;

export const selectFilter = ({ filter }: RootState) => filter;
