import { useState } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';    //вариант без использования хуков
import { useDispatch } from 'react-redux';    // при использовании хуков
import {search} from '../../redux/contacts/contacts-actions';
import s from './FindForm.module.css';


// const FindForm = ({findValue}) => {    //вариант без использования хуков
const FindForm = () => {                   // при использовании хуков
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();  // при использовании хуков

    const findValue = value => dispatch(search(value)); // при использовании хуков

    const findInputChange = e => {
        setInputValue(e.currentTarget.value);
        findValue(e.currentTarget.value);
    };

    // const reset = (e) => setInputValue('');

    return (
        <div className={s.frame}>
            <h3>Find contacts by name</h3>
            <input
                className={s.input}
                type="text"
                name="find"
                value={inputValue}
                onChange={findInputChange}
                // onBlur={reset}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
            />
        </div>
    );

};

export default FindForm;

FindForm.propTypes = {
    inputValue: PropTypes.string
};


/*====================ВАРИАНТ без использования хуков====================*/

// const dispatchFindValueToStore = dispatch => {
//     return {
//       findValue: value => dispatch(search(value))
//     }
// };

// export default connect(null, dispatchFindValueToStore)(FindForm);