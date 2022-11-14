import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.scss';
let nameId = nanoid(3);
let numberId = nanoid(3);

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const onFromSubmit = e => {
    e.preventDefault();
    const { name, number } = state;
    onSubmit(name, number);
    reset();
  };

  const onInputChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const reset = () => {
    setState({
      name: '',
      number: '',
    });
  };

  return (
    <form className={css.form} onSubmit={onFromSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        id={nameId}
        value={state.name}
        onChange={onInputChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberId}>Number</label>
      <input
        id={numberId}
        value={state.number}
        onChange={onInputChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
