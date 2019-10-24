import React, { useState, useEffect } from 'react';
import placeholder from './../../assets/placeholder.png';
import spinner from './../../assets/spinner.gif';

export default ({ name }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setImage(`http://pokestadium.com/sprites/xy/${name}.gif`);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timeout);
  }, [name]);
  return (
    <>
      {loading ? (
        <img className='spinner' src={spinner} alt='Loading' />
      ) : (
        <img
          className='sprite'
          src={image}
          alt={name + 'image'}
          onError={e => {
            e.target.src = placeholder;
          }}
        />
      )}
    </>
  );
};
