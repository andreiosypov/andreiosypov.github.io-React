import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import '../../css/index.css';


const NotFound = () => {
  return (
    <div className="App">
      <h1>
        There&apos;s nothing here!
      </h1>
      <p>
        <Link to="/">Return to homepage</Link>
      </p>
    </div>
  );
};
  
export default NotFound;