"use client"; // Asegúrate de que esta línea esté presente si usas hooks

import Espacio from './Espacio'; // Asegúrate de que esta línea esté presente
import React from 'react'; // Importa React si es necesario

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