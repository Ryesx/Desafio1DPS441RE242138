"use client"; // Asegúrate de que esta línea esté presente

import Espacio from './Espacio'; // Asegúrate de que esta línea esté presente
import React from 'react';

const PlanoParqueo = ({ espacios, reservarEspacio }) => {
  return (
    <div className="d-flex flex-wrap">
      {espacios.map((espacio) => (
        <Espacio key={espacio.id} espacio={espacio} reservarEspacio={reservarEspacio} />
      ))}
    </div>
  );
};

export default PlanoParqueo;