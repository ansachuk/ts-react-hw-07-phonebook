import { ContactsState, FilterState } from "../@types/types";

interface RootState {
	contacts: ContactsState;
	filter: FilterState;
}

export const selectContacts = ({ contacts }: RootState) => contacts.items;
export const selectIsLoading = ({ contacts }: RootState) => contacts.isLoading;
export const selectError = ({ contacts }: RootState) => contacts.error;

export const selectFilter = ({ filter }: RootState) => filter.filter;
