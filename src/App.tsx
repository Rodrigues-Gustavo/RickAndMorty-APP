import { useCharacterData } from "./services/endpoint";

const App = () => {
  const { data, isLoading, isError } = useCharacterData();

  return (
    <>
      <h2>Rick and Morty</h2>
      {
        !isLoading && <>
          {data?.data.map(item => (
            <div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </>
      }
      {isLoading && <p>carregando.....................</p>}
      {isError && <p>Deu algum erro</p>}
    </>
  )
}

export default App
