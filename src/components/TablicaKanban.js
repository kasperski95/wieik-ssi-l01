import React from 'react';
import Lista from './Lista';
import PropTypes from 'prop-types';

function TablicaKanban({ karty, funkcjeZwrotne }) {
  return (
    <div className='app'>
      <Lista
        id='todo'
        tytul='Do zrobienia'
        funkcjeZwrotne={funkcjeZwrotne}
        karty={karty.filter((karty) => karty.status === 'todo')}
      />
      <Lista
        id='in-progress'
        tytul='W toku'
        funkcjeZwrotne={funkcjeZwrotne}
        karty={karty.filter((karty) => karty.status === 'in-progress')}
      />
      <Lista
        id='zrobione'
        tytul='Zrobione'
        funkcjeZwrotne={funkcjeZwrotne}
        karty={karty.filter((karty) => karty.status === 'zrobione')}
      />
    </div>
  );
}

TablicaKanban.propTypes = {
  karty: PropTypes.arrayOf(PropTypes.object),
  funkcjeZwrotne: PropTypes.object,
};

export default TablicaKanban;
