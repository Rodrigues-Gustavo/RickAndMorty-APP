import { useCharacterData } from "./services/endpoint";

const App = () => {
  const { data, isLoading, isError } = useCharacterData();

  return (
    <>
      <h2>Rick and Morty</h2>
      {
        !isLoading && <>
          {data?.results.map(item => (
            <>
            <div>
              <h3>{item.name}</h3>
              <p>{item.status}</p>
              <p>{item.species}</p>
              <p>{item.type}</p>
              <p>{item.gender}</p>
              {/* <p>{item.origin}</p> */}
              <img src={item.image} alt="" /><br />
              <a href={item.episode}>Aparições</a><br />
              <a href={item.url}>Saiba mais sobre o personagem</a>
            </div>
            </>
          ))}
        </>
      }
      {isLoading && <p>carregando.....................</p>}
      {isError && <p>Deu algum erro</p>}
    </>
  )
}

export default App
