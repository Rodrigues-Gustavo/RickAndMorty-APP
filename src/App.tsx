import { useCharacterData } from "./hooks/useCharacter";
import GlobalStyles from "./GlobalStyle";
import Header from "./components/Header";
import Search from "./components/Search";
import CharacterCard from "./components/CharacterCard";


const App = () => {
  const { data, isLoading, isError } = useCharacterData();

  return (
    <>
      <GlobalStyles />
      <Header />
      <Search />
      <CharacterCard />
    </>
  )
}

export default App
