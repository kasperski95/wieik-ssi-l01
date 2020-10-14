import React from 'react';
import Karta from './Karta';

export default function Lista({ tytul, karty }) {
  return (
    <div className='list'>
      <h1>{tytul}</h1>
      {(karty || []).map((karta) => (
        <Karta key={karta.id} {...karta} />
      ))}
    </div>
  );
}
