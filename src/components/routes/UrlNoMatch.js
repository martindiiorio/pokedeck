import React from 'react';
import { Redirect } from 'react-router-dom';

const UrlNoMatch = () => {
  return (
    <div>
      <Redirect to="/pokemon" />
    </div>
  )
}

export default UrlNoMatch;