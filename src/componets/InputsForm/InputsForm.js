import { useState } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';  //вариант без использования хуков
import { useDispatch } from 'react-redux'; // при использовании хуков
import  {addition} from '../../redux/contacts/contacts-actions';
import s from './InputsForm.module.css';
import { v4 as uuidv4 } from 'uuid';


// function InputsForm({contactToStore}) {    //вариант без использования хуков
export default function InputsForm() {         // при использовании хуков
  const [subscriber, setSubscriber] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');
  const dispatch = useDispatch();    // при использовании хуков

  const contactToStore = obj => dispatch(addition(obj));    // при использовании хуков

  
  const handleInputChange = e => {
    switch (e.currentTarget.name) {
      case 'subscriber':
        setSubscriber(e.currentTarget.value);
        setId(uuidv4());
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        break;
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    // let obj = { subscriber, number, id };
    // contactToStore(obj);
    contactToStore({ subscriber, number, id });
    reset();
  };

  const reset = () => {
    setSubscriber('');
    setNumber('')
  };

  return (
      <div className={s.frame}>
      <form
        onSubmit={handleSubmit}
        className={s.form}
        autoComplete="on">
            <h3>Name</h3>
            <label >
              <input
                className={s.input}
                type="text"
                name="subscriber"
                value={subscriber}
                onChange={handleInputChange}  
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
              />
            </label>
            
            <h3>Number</h3>

            <label>
                <input
                className={s.input}
                type="tel"
                name="number"
                value={number}
                onChange={handleInputChange} 
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
              />
            </label> 
          <button type="submit" className={s.btn}>Add contact</button> 
        </form> 
      </div>
    )
  };

InputsForm.propTypes = {
  subscriber: PropTypes.string,
  number: PropTypes.string,
};

/*====================ВАРИАНТ без использования хуков====================*/

// const mapDispatchToProps = dispatch => {
//     return {
//       contactToStore: obj => dispatch(addition(obj))
//     }
// };

// export default connect(null, mapDispatchToProps)(InputsForm);

