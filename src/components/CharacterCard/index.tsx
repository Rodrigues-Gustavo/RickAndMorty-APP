import { useCharacterData } from "../../hooks/useCharacter";
import { CharacterCardItem } from "../CharacterItem.tsx";


const CharacterCard = () => {
  const { data, isLoading, isError } = useCharacterData();
  return (
    <>
      {
        !isLoading && <>
          {data?.results.map(item => (
            <CharacterCardItem
              name={item.name}
              image={item.image}
              status={item.status}
              gender={item.gender}
            />
          ))}
        </>
      }
      {isLoading && <p>carregando...</p>}
      {isError && <p>Deu algum erro</p>}
    </>
  )
}

export default CharacterCard;