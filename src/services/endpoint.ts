import axios, { AxiosPromise} from "axios";
import { useQuery } from "react-query";
import { CharacterResponse } from "../interfaces/characterData";

const API_URL = "https://rickandmortyapi.com/api"

const fetchData = async (): AxiosPromise<CharacterResponse> => {
  const response = await axios.get<CharacterResponse>(API_URL + '/character');
  return response;
}

export function useCharacterData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['id']
  })

  return {
    ...query,
    data: query.data?.data
  };
}
