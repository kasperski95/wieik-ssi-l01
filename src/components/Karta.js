import React from "react"
import Zrobione from './Zrobione';

export default function Karta({ id,
  tytul,
  opis,
  status,
  zadania }) {
  const [pokazSzczegoly, ustawPokazSzczegoly] = React.useState(false);

  return (<div className="card">
    <div className="card__title" onClick={() => ustawPokazSzczegoly(!pokazSzczegoly)}>{tytul}</div>
    {pokazSzczegoly && <div className="card__details">{opis}</div>}
    <Zrobione idKarty={id} zadania={zadania} />
  </div>)
}