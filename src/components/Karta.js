import React from 'react';
import Zrobione from './Zrobione';

export default function Karta({ id, tytul, opis, status, zadania }) {
  const [pokazywanieSzczegolow, ustawPokazywanieSzczegolow] = React.useState(
    false
  );

  return (
    <div className='card'>
      <div
        className={`card__title${
          pokazywanieSzczegolow ? ' card__title--is-open' : ''
        }`}
        onClick={() => ustawPokazywanieSzczegolow(!pokazywanieSzczegolow)}
      >
        {tytul}
      </div>
      {pokazywanieSzczegolow && <div className='card__details'>{opis}</div>}
      <Zrobione idKarty={id} zadania={zadania} />
    </div>
  );
}
