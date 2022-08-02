// import {ContactForm} from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/Form';
import { Box } from 'components/ui/Box';
import { Section } from 'components/ui/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = values => {
    const name = values.name;
    const names = this.state.contacts.map(contact => contact.name);

    if (!names.includes(name)) {
      const newContact = {
        id: nanoid(3),
        name,
        number: values.number,
      };
      this.setState({
        contacts: [newContact, ...this.state.contacts],
      });
      return true;
    }
    alert(`${name} is already in contacts`);
    return false;
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    const normilezedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilezedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Box
          width="460px"
          margin="0 auto"
          display="flex"
          flexDirection="column"
          as="section"
        >
          <Section title="Phonebook">
            {/* <ContactForm onSubmit={this.addContact}/> */}
            <ContactForm onSubmit={this.handleSubmit} />
          </Section>

          <Section title="Contacts">
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ContactList
              options={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </Section>
        </Box>
      </>
    );
  }
}

// =================== My Notes =====================
// onSubmit={this.formSubmitHandler}
// =======
// formSubmitHandler =data=>{
//   console.log(data);
// }

// without distructurization
// const normilezedFilter=this.state.filter.toLowerCase();
// const filteredContacts=this.state.contacts.filter(contact=>
//   contact.name.toLowerCase().includes(normilezedFilter));

// ******* For ContactForm
// addContact = ({name, number})=>{
// const contact={
// id:nanoid(3),
// name,
// number,
// };

// without destructarization
// // this.setState(prevState=>({
// //   contacts:[contact,...prevState.contacts],
// // }))

// this.setState(({contacts})=>({
//   contacts:[contact,...contacts],
// }));

// };

// *****
