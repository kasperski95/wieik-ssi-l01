import React from "react"

export default function Zrobione({ zadania }) {
  return <div className="checklist">
    <ul>{(zadania || []).map(({ zrobione, nazwa }) => {
      return (<li>
        <input type="checkbox" defaultChecked={zrobione} />
        {nazwa}
        <a href="#" className="checklist__task--remove" />
      </li>)
    })}</ul>
  </div>
}