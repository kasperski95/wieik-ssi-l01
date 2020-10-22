import React from 'react';
import PropTypes from 'prop-types';

function Zrobione({ idKarty, zadania, funkcjeZwrotne }) {
  const sprawdzKlawisz = (e) => {
    if (e.key === 'Enter') {
      funkcjeZwrotne.dodajZadanie(idKarty, e.target.value);
      e.target.value = '';
    }
  };

  return (
    <div className='checklist'>
      <ul>
        {(zadania || []).map(
          ({ zrobione, nazwa, id: idZadania }, indexZadania) => {
            return (
              <li key={nazwa}>
                <input
                  type='checkbox'
                  defaultChecked={zrobione}
                  onChange={() => {
                    funkcjeZwrotne.zmienZadanie(
                      idKarty,
                      idZadania,
                      indexZadania
                    );
                  }}
                />
                {nazwa}
                <button
                  className='checklist__task--remove'
                  onClick={() => {
                    funkcjeZwrotne.usunZadanie(
                      idKarty,
                      idZadania,
                      indexZadania
                    );
                  }}
                />
              </li>
            );
          }
        )}
      </ul>
      <input
        type='text'
        className='checklist__add-task'
        placeholder='Proszę podać nazwę i nacisnąć enter'
        onKeyPress={sprawdzKlawisz}
      />
    </div>
  );
}

Zrobione.propTypes = {
  idKarty: PropTypes.number,
  zadania: PropTypes.arrayOf(PropTypes.object),
  funkcjeZwrotne: PropTypes.object,
};

export default Zrobione;
