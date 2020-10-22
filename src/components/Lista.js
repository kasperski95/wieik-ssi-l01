import React from 'react';
import Karta from './Karta';
import PropTypes from 'prop-types';

function Lista({ tytul, karty, funkcjeZwrotne }) {
  return (
    <div className='list'>
      <h1>{tytul}</h1>
      {(karty || []).map((karta) => (
        <Karta key={karta.id} {...karta} funkcjeZwrotne={funkcjeZwrotne} />
      ))}
    </div>
  );
}

Lista.propTypes = {
  tytul: PropTypes.string.isRequired,
  karty: PropTypes.arrayOf(PropTypes.object),
  funkcjeZwrotne: PropTypes.object,
};

export default Lista;
