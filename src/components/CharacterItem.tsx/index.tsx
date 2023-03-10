import * as C from './style'

export const CharacterCardItem = ({...props}) => {
  return (
    <C.Container>
        <C.Wrapper>
            <C.Title>{props.name}</C.Title>
            <img src={props.image} alt="" />
            <p>{props.status}</p>
            <p>{props.gender}</p>
            {/* <p>{item.status}</p>
            <p>{item.species}</p>
            <p>{item.type}</p>
            <p>{item.gender}</p>
            <p>{item.origin}</p>
            <img src={item.image} alt="" /><br />
            <a href={item.episode}>Aparições</a><br />
            <a href={item.url}>Saiba mais sobre o personagem</a> */}
        </C.Wrapper>
  </C.Container>
  )
}
