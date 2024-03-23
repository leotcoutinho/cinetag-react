import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

//hook
export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    );

    let novaLista = [...favorito];

    if (favoritoRepetido) {
      novaLista.splice(novaLista.indexOf(novoFavorito), 1);
      return setFavorito(novaLista);
    }

    novaLista.push(novoFavorito);

    return setFavorito(novaLista);
  }

  return {
    favorito,
    adicionarFavorito,
  };
}
