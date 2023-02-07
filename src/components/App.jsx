import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';

const LOCAL_STORAGE_CONTACTS_KEY = 'contacts';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONTACTS_KEY))?.length > 0
  //     ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONTACTS_KEY))
  //     : initialContacts
  // );

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_CONTACTS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </>
  );
};
