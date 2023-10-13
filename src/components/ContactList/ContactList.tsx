import { useDispatch, useSelector } from "react-redux";

import { Notify } from "notiflix";

import { selectContacts, selectFilter } from "../../redux/selectors";
import { deleteContact } from "../../redux/operations";

import { AppDispatch } from "../../@types/types";

import css from "./ContactList.module.scss";

const ContactList = () => {
	const dispatch = useDispatch<AppDispatch>();

	const contacts = useSelector(selectContacts);
	const filter = useSelector(selectFilter);

	const onDeleteContact = (id: string) => {
		Notify.failure("Contact deleted!");
		dispatch(deleteContact(id));
	};

	console.log("contacts.length", contacts.length);

	return (
		<ul className={css.list}>
			{contacts?.length &&
				contacts
					.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
					.map(({ name, phone, id }) => (
						<li key={name} className={css.listItem}>
							{name} : <span className={css.number}>{phone}</span>
							<button
								className={css.deleteButton}
								onClick={() => {
									onDeleteContact(id);
								}}
							>
								Delete
							</button>
						</li>
					))}
		</ul>
	);
};

export default ContactList;
