import React from 'react';

export default function Zrobione({ zadania }) {
  return (
    <div className='checklist'>
      <ul>
        {(zadania || []).map(({ zrobione, nazwa }) => {
          return (
            <li key={nazwa}>
              <input type='checkbox' defaultChecked={zrobione} />
              {nazwa}
              <button className='checklist__task--remove' />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
