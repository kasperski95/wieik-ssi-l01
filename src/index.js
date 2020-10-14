import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TablicaKanban from './components/TablicaKanban'

const listaKart = [
  {
    id: 1,
    tytul: "Przeczytać książkę",
    opis: "Muszę przeczytać całą książkę",
    status: "in-progress",
    zadania: []
  }, {
    id: 2,
    tytul: "Napisać trochę kodu",
    opis: "Będę przepisywał kod z laboratorium",
    status: "todo",
    zadania: [
      { id: 1, nazwa: "Przykład listy zakupów", zrobione: true },
      { id: 2, nazwa: "Przykład kanban", zrobione: false },
      { id: 3, nazwa: "Mój własny przykład", zrobione: false }
    ]
  }
]

ReactDOM.render(
  <React.StrictMode>
    <TablicaKanban karty={listaKart} />
  </React.StrictMode>,
  document.getElementById('root')
);


