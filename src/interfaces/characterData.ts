interface DetailedHTMLProp {
    name: string,
    url: string
}

export interface CharacterData {
    id: number,
    name: string,
    status: string
    species: string,
    type: string,
    gender: string,
    // origin: ,
    /////////////
    // location: Others,
    //////////////
    image: string,
    ///////////////
    episode: [],
    url: string,

}

export interface CharacterResponse{
    data: CharacterData[],
    results: CharacterData[]
}