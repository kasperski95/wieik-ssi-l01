import React from 'react';
import marked from 'marked';
import Zrobione from './Zrobione';
import PropTypes from 'prop-types';

const walidatorTytulu = (props, propName, componentName) => {
  if (props[propName]) {
    const value = props[propName];
    if (typeof value !== 'string' || value.length > 50) {
      return new Error(
        `Wartość ${propName} w komponencie ${componentName} jest dłuższa niż 50 znaków.`
      );
    }
  }
};

function Karta({ id, tytul, opis, status, zadania, kolor, funkcjeZwrotne }) {
  const [pokazywanieSzczegolow, ustawPokazywanieSzczegolow] = React.useState(
    false
  );

  const stylPaska = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 8,
    backgroundColor: kolor,
  };

  return (
    <div className='card'>
      <div style={stylPaska} />
      <div
        className={`card__title${
          pokazywanieSzczegolow ? ' card__title--is-open' : ''
        }`}
        onClick={() => ustawPokazywanieSzczegolow(!pokazywanieSzczegolow)}
      >
        {tytul}
      </div>
      {pokazywanieSzczegolow && (
        <div className='card__details'>
          <span dangerouslySetInnerHTML={{ __html: marked(opis) }} />
          <Zrobione
            idKarty={id}
            zadania={zadania}
            funkcjeZwrotne={funkcjeZwrotne}
          />
        </div>
      )}
      <div>
        <button
          children='<'
          onClick={() => {
            let newStatus = status;
            if (status === 'in-progress') newStatus = 'todo';
            if (status === 'zrobione') newStatus = 'in-progress';

            funkcjeZwrotne.zmienKarte({
              id,
              tytul,
              opis,
              status: newStatus,
              zadania,
              kolor,
            });
          }}
        />
        <button
          children='>'
          onClick={() => {
            let newStatus = status;
            if (status === 'in-progress') newStatus = 'zrobione';
            if (status === 'todo') newStatus = 'in-progress';

            funkcjeZwrotne.zmienKarte({
              id,
              tytul,
              opis,
              status: newStatus,
              zadania,
              kolor,
            });
          }}
        />
      </div>
    </div>
  );
}

Karta.propTypes = {
  id: PropTypes.number,
  tytul: walidatorTytulu,
  opis: PropTypes.string,
  status: PropTypes.string,
  zadania: PropTypes.arrayOf(PropTypes.object),
  kolor: PropTypes.string,
  funkcjeZwrotne: PropTypes.object,
};

export default Karta;
