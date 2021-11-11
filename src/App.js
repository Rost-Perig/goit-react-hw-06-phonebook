import './App.css';
import Section from './componets/Section';
import InputsForm from './componets/InputsForm';
import ContactList from './componets/ContactList';


function App() {

  return (
    <div className="App">
      
      <Section title={"Phonebook"}>
        <InputsForm/>
      </Section>

      <Section title={"Contacts"}>
          <ContactList/>
      </Section>

    </div>
  )
};

export default App;
