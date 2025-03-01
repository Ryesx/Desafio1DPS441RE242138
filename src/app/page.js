"use client"; // Agrega esta línea al principio del archivo

import { useState } from 'react'; // Importa el hook useState de React
import PlanoParqueo from './components/PlanoParqueo'; // Importa el componente que renderiza los espacios
import ResumenReserva from './components/ResumenReserva'; // Importa el componente que muestra el resumen de la reserva
import SelectorZona from './components/SelectorZona'; // Importa el componente que permite seleccionar la zona

const Home = () => {
  // Define el estado inicial de los espacios de parqueo
  const [espacios, setEspacios] = useState({
    cubierto: Array(10).fill(null).map((_, i) => ({ id: i, numero: i + 1, ocupado: false })),
    descubierto: Array(10).fill(null).map((_, i) => ({ id: i + 10, numero: i + 11, ocupado: false })),
    vip: Array(5).fill(null).map((_, i) => ({ id: i + 20, numero: i + 21, ocupado: false })),
  });

  // Estado para la zona seleccionada
  const [zonaSeleccionada, setZonaSeleccionada] = useState('cubierto');

  // Estado para los detalles de la reserva
  const [reserva, setReserva] = useState({ espacio: null, duracion: 0, total: 0 });

  // Función para reservar un espacio
  const reservarEspacio = (id) => {
    setEspacios((prev) => {
      const nuevoEspacio = prev[zonaSeleccionada].map((espacio) => 
        espacio.id === id ? { ...espacio, ocupado: true } : espacio
      );
      return { ...prev, [zonaSeleccionada]: nuevoEspacio };
    });

    // Actualizar el resumen de la reserva
    const duracion = 2; // Por ejemplo, duración fija de 2 horas
    const total = calcularTotal(duracion);
    setReserva({ espacio: id, duracion, total });
  };

  // Función para calcular el total de la reserva
  const calcularTotal = (duracion) => {
    const precioPorHora = 10; // Ejemplo de precio
    return duracion * precioPorHora;
  };

  // Renderiza la interfaz de usuario
  return (
    <div>
      <SelectorZona zonas={['cubierto', 'descubierto', 'vip']} onSelect={setZonaSeleccionada} />
      <PlanoParqueo espacios={espacios[zonaSeleccionada]} reservarEspacio={reservarEspacio} />
      <ResumenReserva reserva={reserva} />
    </div>
  );
};

export default Home; // Exporta el componente para que Next.js lo use