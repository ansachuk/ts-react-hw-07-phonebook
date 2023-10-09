export type Contact = {
	name: string;
	phone: string;
	id: number;
	createdAt: string;
};

export type ContactsState = {
	items: Contact[];
	isLoading: boolean;
	error: Error | null;
};
