import img from './pup.jpg';
import './index.css';
import {useState} from 'react';
import HomePage from './components/HomePage';
import Lesson1 from './components/Lesson1';


function App(props) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
        <div className="img">
          <Lesson1 />
      <h1>{props.title}</h1>
      <img src={img} className="img-pup" alt="puppy" /><br></br>
      <button onClick={handleClick}>Click Here{props.buttonText}</button>
      <p>Number of clicks: {count}</p>
      <HomePage />
    </div>
    );

   }



export default App;
