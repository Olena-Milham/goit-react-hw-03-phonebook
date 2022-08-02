// =========== Form without Formik ===============
// import styled from 'styled-components';

// // import { nanoid } from 'nanoid';
// import { Component } from 'react';

// const Input = styled.input`
//   color: #2a2a2a;
// `;

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   // nameInputId = nanoid(3);
//   // numberInputId=nanoid(3);

//   // handleSubmit = (values, { resetForm }) => {
//   //   console.log(values);
//   //   resetForm();
//   // };

//   // handleNameChange = event=>{
//   //   // console.log(event.currentTargrt.value);
//   //   this.setState({name:event.currentTarget.value})
//   // }

//   // handleNumberChange = event=>{
//   //   // console.log(event.currentTargrt.value);
//   //   this.setState({number:event.currentTarget.value})
//   // }

//   //   handleChange=event=>{
//   //     this.setState({
//   //       [event.currentTarget.name]:event.currentTarget.value
//   //     })
//   //   }

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     // console.log(this.state);
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   // clear state:
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form autoComplete="off" onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>Name</label>
//         <Input
//           value={this.state.name}
//           onChange={this.handleChange}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           // id={this.nameInputId}
//         />

//         <label htmlFor={this.numberInputId}>Number</label>
//         <Input
//           value={this.state.number}
//           onChange={this.handleChange}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           // id={this.numberInputId}
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }
