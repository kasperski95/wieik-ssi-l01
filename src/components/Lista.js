import React from 'react';
import Karta from './Karta';
import Modal from './Modal';
import PropTypes from 'prop-types';

function Lista({ id, tytul, karty, funkcjeZwrotne }) {
  const [formVisibility, setFormVisibility] = React.useState(false);
  const [formData, setFormData] = React.useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    funkcjeZwrotne.dodajKarte(
      formData.tytul || 'undefined',
      formData.opis || '',
      id
    );
    setFormVisibility(false);
  };

  return (
    <div className='list'>
      <h1>{tytul}</h1>
      {(karty || []).map((karta) => (
        <Karta key={karta.id} {...karta} funkcjeZwrotne={funkcjeZwrotne} />
      ))}
      <button
        onClick={() => setFormVisibility(!formVisibility)}
        children='Dodaj'
      />
      {formVisibility && (
        <Modal>
          <form className='card--floating' onSubmit={onSubmit}>
            <input
              name='tytul'
              placeholder='Tytuł'
              type='text'
              onChange={(e) => {
                setFormData({ ...formData, tytul: e.target.value });
              }}
            />
            <input
              name='opis'
              placeholder='Opis'
              type='text'
              onChange={(e) => {
                setFormData({ ...formData, opis: e.target.value });
              }}
            />
            <div>
              <button type='submit' children='Dodaj' />
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

Lista.propTypes = {
  id: PropTypes.string.isRequired,
  tytul: PropTypes.string.isRequired,
  karty: PropTypes.arrayOf(PropTypes.object),
  funkcjeZwrotne: PropTypes.object,
};

export default Lista;
