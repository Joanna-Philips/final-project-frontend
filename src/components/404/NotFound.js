import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <p>
        <Link to="/login">GO TO LOGIN</Link>
      </p>
      <p>
        <Link to="/">GO TO MAIN</Link>
      </p>
      <img src="https://art.pixilart.com/sr274b752bfbece.png" alt="404 not found" />
    </>
  );
}

export default NotFound;