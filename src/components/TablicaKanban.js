import React from 'react';
import Lista from './Lista';

export default function TablicaKanban({ karty }) {
  return (
    <div className='app'>
      <Lista
        id='todo'
        tytul='Do zrobienia'
        karty={karty.filter((karty) => karty.status === 'todo')}
      />
      <Lista
        id='in-progress'
        tytul='W toku'
        karty={karty.filter((karty) => karty.status === 'in-progress')}
      />
      <Lista
        id='zrobione'
        tytul='Zrobione'
        karty={karty.filter((karty) => karty.status === 'zrobione')}
      />
    </div>
  );
}
