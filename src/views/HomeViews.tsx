import React, { useEffect } from "react";
import PageLink from "../components/PageLink";
import useCharacters from "../hooks/useCharacters";
import usePagination from "../hooks/usePagination";
import Pagination from "./Pagination";

function HomeView() {
  const { pagesApi, characters, fetchCharacter } = useCharacters(1);
  const { currentPage, setCurrentPage } = usePagination();
  const lastPage = pagesApi;

  useEffect(() => {
    fetchCharacter(currentPage);
  }, [currentPage]);


  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "30px",
        }}
      >
        {characters.map((character) => (
          <div key={character.id} style={{ width: "100%", height: "100%"}}>
            <img
              src={character.image}
              alt={character.name}
              style={{borderRadius: '10px', objectFit: 'cover', minHeight: '300px', minWidth: '300px'}}
            />
            <span className="text-2xl font-bold text-center">{character.name}</span><br></br>
            <span>{character.status === "Alive" ? 'Vivo' : 'Morto'}</span><br></br>
          </div>
        ))}
      </div>
          <br></br>
          <br></br>
          <br></br>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        maxLength={7}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default HomeView;
