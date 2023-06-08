import './App.css';
import Form from './components/Form';
import Subscribed from './components/Subscribed';
import { useState } from 'react';

function App() {

  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className='app'>
      {isValid ? <Subscribed email={email} setIsValid={setIsValid} /> : <Form setIsValid={setIsValid} setEmail={setEmail} />}
    </div>
  );
}

export default App;
