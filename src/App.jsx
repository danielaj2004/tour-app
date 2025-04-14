// Task 1 app.jsx

import React, { useState } from 'react'; // import react
import Gallary from './components/Gallery'; // import gallery
import './styles/style.css'; // import styles

function App() {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id)); // removes tours by id
  };
  return (
    <main>
      <h1>Current Tours available</h1>
      <Gallary tours={tours} setTours={setTours} onRemove={removeTour} /> 
    </main>
  ); // return component
}
export default App
