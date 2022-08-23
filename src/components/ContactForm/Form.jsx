import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as yup from 'yup';
import { FormBtn } from './Form.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Please enter your name'),
  number: yup
    .string()
    .min(5)
    .max(13)
    .required('Phone number is required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValues = {
  name: '',
  number: '',
};

const Input = styled(Field)`
  color: ${p => p.theme.colors.text};
  padding: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

const FormFields = styled(Form)`
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
`;

const ErrorText = styled.p`
  color: red;
`;
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormFields autoComplete="off">
        <div>
          <label htmlFor="name">Name</label>
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Add a new contact"
              id="name"
            />
            {/* ErrorMassage=FormError */}
            <FormError name="name" component="div" />
          </div>
        </div>

        <div>
          <label htmlFor="name">Number</label>
          <div>
            <Input
              type="tel"
              name="number"
              placeholder="Add a phone number"
              id="number"
            />
            <FormError name="number" component="div" />
          </div>
        </div>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormFields>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
