import React from 'react';
import TablicaKanban from './TablicaKanban';
import update from 'immutability-helper';

function TablicaKanbanKontener() {
  const [karty, ustawKarty] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch('./karty.json');
        const dane = await response.json();
        ustawKarty(dane);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const dodajKarte = React.useCallback(
    (tytul, opis, status) => {
      let kolor;

      if (!status) {
        status = 'todo';
      }

      switch (status) {
        case 'todo':
          kolor = '#3A7A2A';
          break;
        case 'in-progress':
          kolor = '#BD8D3D';
          break;
        case 'zrobione':
          kolor = '#8D8DED';
          break;
      }

      let maxId = karty.reduce((currentMax, { id }) => {
        return id > currentMax ? id : currentMax;
      }, 0);

      ustawKarty(
        update(karty, {
          $push: [
            {
              id: maxId + 1,
              tytul,
              opis,
              status,
              kolor,
              zadania: [],
            },
          ],
        })
      );
    },
    [karty]
  );

  const dodajZadanie = React.useCallback(
    (idKarty, nazwaZadania) => {
      const poprzedniStan = karty;
      const indexKarty = karty.findIndex(({ id }) => idKarty === id);
      const noweZadanie = {
        id: Date.now(),
        nazwa: nazwaZadania,
        zrobione: false,
      };
      const nowyStan = update(karty, {
        [indexKarty]: {
          zadania: { $push: [noweZadanie] },
        },
      });
      ustawKarty(nowyStan);
    },
    [karty]
  );

  const usunZadanie = React.useCallback(
    (idKarty, idZadania, indexZadania) => {
      const poprzedniStan = karty;

      console.log(karty);
      const indexKarty = karty.findIndex(({ id }) => idKarty === id);
      const nowyStan = update(karty, {
        [indexKarty]: {
          zadania: { $splice: [[indexZadania, 1]] },
        },
      });
      ustawKarty(nowyStan);
    },
    [karty]
  );

  const zmienZadanie = React.useCallback(
    (idKarty, idZadania, indexZadania) => {
      console.log('-----------------');
      console.log('idKarty', idKarty);
      console.log('idZadania', idZadania);
      console.log('indexZadania', indexZadania);
    },
    [karty]
  );

  return (
    <TablicaKanban
      karty={karty}
      funkcjeZwrotne={{ dodajZadanie, usunZadanie, zmienZadanie, dodajKarte }}
    />
  );
}

export default TablicaKanbanKontener;
