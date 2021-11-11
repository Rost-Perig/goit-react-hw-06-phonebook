import PropTypes from 'prop-types';
import s from './ContactData.module.css';
// import { connect } from 'react-redux';    //вариант без использования хуков
import { useDispatch } from 'react-redux';
import {deletion} from '../../redux/contacts/contacts-actions';

// const ContactData = ({contactObj, idToDel}) => {   //вариант без использования хуков
    const ContactData = ({contactObj}) => {  // при использовании хуков
    const dispatch = useDispatch();    // при использовании хуков
    const idToDel = id => dispatch(deletion(id));   // при использовании хуков
        
    const deletedId = e => idToDel(e.target.dataset.key);
    const {subscriber, id, number} = contactObj;
    return (
        <>
            <p className={s.textItem}>
                <span>{subscriber}:</span>
                <span>{number}</span>
            </p>
            <button
                className={s.btn}
                type={"button"}
                data-key={id}
                onClick={deletedId}>
                Delete
            </button>
        </>
    );
};

ContactData.propTypes = {
  subscriber: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactData;


/*====================ВАРИАНТ без использования хуков====================*/

// const mapDispatchToProps = dispatch => {
//     return {
//         idToDel: id => dispatch(deletion(id))
//     }
// };

// export default connect(null, mapDispatchToProps)(ContactData);