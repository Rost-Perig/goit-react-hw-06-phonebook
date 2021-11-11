// import { useEffect } from 'react'; //не нужно с очень замороченой и пока непонятной записью в localStorage
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';  //вариант без использования хуков
import { useSelector } from 'react-redux'; // при использовании хуков
import { getContactsItems, getContactsFilter } from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css'
import ContactData from '../ContactData';
import FindForm from '../FindForm';

// const ContactList = ({ contactArr, findValue }) => {   //вариант без использования хуков
const ContactList = () => {
    // const contactArr = useSelector(state => state.contacts.items);
    const contactArr = useSelector(getContactsItems);  // при использовании хуков
    // const findValue = useSelector(state => state.contacts.filter);
    const findValue = useSelector(getContactsFilter);   // при использовании хуков

    
    //запись контактов в window.localStorage по "рабоче-крестьянски", без заморочек

    //     useEffect(() => {
    //     window.localStorage.setItem('contacts', JSON.stringify(contactArr));
    //   }, [contactArr]); 
    

    const tempContactArr = [...contactArr].sort((a, b) => a.subscriber.localeCompare(b.subscriber));

     return (
        <div>

            <FindForm/>
                
            {contactArr && (<ul className={s.list}>
                 {tempContactArr.filter(item => item.subscriber.toLowerCase().includes(findValue.toLowerCase())).map(item => {
                    const { id } = item;
                    return (
                        <li key={id} className={s.listItem}>
                            < ContactData contactObj={item} />
                        </li>
                    );
                })}
            </ul>)}
                
        </div>
    );
};

ContactList.propTypes = {
  id: PropTypes.string,
};

export default ContactList;

/*====================ВАРИАНТ без использования хуков====================*/

// const mapStateToProps = state => {
//     return {
//         contactArr: state.contacts.items,
//         findValue: state.contacts.filter
//     }
// };

// export default connect(mapStateToProps)(ContactList);