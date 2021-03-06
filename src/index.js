import React from 'react';
import ReactDOM from 'react-dom';
import TablicaKanbanKontener from './components/TablicaKanbanKontener';

// const listaKart = [
//   {
//     id: 1,
//     tytul: 'Przeczytać książkę',
//     opis: 'Muszę przeczytać **całą** książkę',
//     status: 'in-progress',
//     kolor: '#BD8D3D',
//     zadania: [],
//   },
//   {
//     id: 2,
//     tytul: 'Napisać trochę kodu',
//     opis:
//       'Będę przepisywał kod z laboratorium. Źródła będą na stronie [http://dgrela.pl](dgrela.pl)',
//     kolor: '#3A7A2A',
//     status: 'todo',
//     zadania: [
//       { id: 1, nazwa: 'Przykład listy zakupów', zrobione: true },
//       { id: 2, nazwa: 'Przykład kanban', zrobione: false },
//       { id: 3, nazwa: 'Mój własny przykład', zrobione: false },
//     ],
//   },
// ];

ReactDOM.render(
  <React.StrictMode>
    <TablicaKanbanKontener />
  </React.StrictMode>,
  document.getElementById('root')
);
