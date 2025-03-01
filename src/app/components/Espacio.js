"use client"; // Asegúrate de que esta línea esté presente si usas hooks

const Espacio = ({ espacio, reservarEspacio }) => {
  return (
    <button 
      className={`btn ${espacio.ocupado ? 'btn-danger' : 'btn-success'}`} 
      onClick={() => !espacio.ocupado && reservarEspacio(espacio.id)}
    >
      {espacio.numero}
    </button>
  );
};

export default Espacio;