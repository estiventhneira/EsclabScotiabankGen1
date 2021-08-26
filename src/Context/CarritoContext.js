import React, {createContext, useState} from 'react';

export const CarritoContext = createContext();

const CarritoProvider = props => {
  const [favoritos, setFavoritos] = useState([]);
  const [characterSelected, setCharacterSelected] = useState([]);

  return (
    <CarritoContext.Provider
      value={{
        favoritos,
        setFavoritos,
        characterSelected,
        setCharacterSelected,
      }}>
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
