import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Jelly } from "@uiball/loaders";

import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

import { selectContacts, selectError, selectIsLoading } from "../../redux/selectors";
import { fetchContacts } from "../../redux/operations";

import { AppDispatch } from "../../@types/types";

import css from "./App.module.scss";

export function App() {
	const disp = useDispatch<AppDispatch>();

	const contacts = useSelector(selectContacts);
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		disp(fetchContacts());
	}, [disp]);

	return (
		<>
			<h1 className={css.title}>Phone Book</h1>
			<ContactForm />

			{!error && (
				<>
					{isLoading === true ? (
						<div className={css.backdrop} aria-live="polite" aria-busy={isLoading}>
							<Jelly color="#18a6a6" size={200} speed={0.6} />
						</div>
					) : contacts.length > 0 ? (
						<>
							<h2 className={css.subtitle}>Contacts</h2>
							<Filter />
							<ContactList />
						</>
					) : (
						<p className={css.message}>You have no contacts yet!</p>
					)}
				</>
			)}
		</>
	);
}
