import React from "react";
import ElementListy from './ElementListy'

export default function ListaZakupow() {
  return <ul>
    <ElementListy ilosc="1" nazwa="Chleb" />
    <ElementListy ilosc="6" nazwa="Jaja" />
    <ElementListy ilosc="2" nazwa="Mleko" />
  </ul>
}