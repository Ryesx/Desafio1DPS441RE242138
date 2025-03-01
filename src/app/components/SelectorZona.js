const SelectorZona = ({ zonas, onSelect }) => {
    return (
      <div>
        {zonas.map((zona) => (
          <button key={zona} onClick={() => onSelect(zona)}>
            {zona}
          </button>
        ))}
      </div>
    );
  };
  
  export default SelectorZona;