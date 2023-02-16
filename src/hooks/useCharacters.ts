import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface Character {
  id: string;
  name: string;
  image: string;
  status: string;
}

export default function useCharacters(pageLimit: number) {

  const [characters, setCharacter] = useState<Character[]>([]); // setando array zerado
  const [pagesApi, setPages] = useState(Number);
  const [countApi, setTotal] = useState(Number);
  const navigate = useNavigate();

  function fetchCharacter(page: number) {
    const virtualPage =
      (page) * pageLimit <= 0 ? 0 : (page) * pageLimit;

      const getAPI = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?page=${virtualPage}`
        );
        const data = await res.json();

        setCharacter(data.results);
        setPages(data.info.pages);
        setTotal(data.info.count);
      } catch (error) {
        navigate("/?page=1");
        location.reload();
      }
    };

    getAPI();

  }
// console.log(characters)
  return {
    fetchCharacter,
    characters,
    pagesApi,
    countApi,
  };

}
