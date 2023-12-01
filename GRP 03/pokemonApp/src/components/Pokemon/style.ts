import styled from "styled-components/native";

export const PokemonContainer = styled.View`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;

  border: 2px solid black;
  border-radius: 10px;
  background-color: #FFD700;
`

export const PokemonPictureContainer = styled.View`
  margin: 16px 0;
  background-color: lightblue;
  border-radius: 15px;
`

export const PokemonPicture = styled.Image`
  /* border: 1px solid red; */
`

export const NoImageText = styled.Text`
  font-size: 16px;
  font-style: italic;
`

export const Name = styled.Text`
  text-align: center;
  font-size: 32px;
  text-transform: capitalize;
  color: #000;
  font-weight: 700;
`

export const StatusContainer = styled.View`
  display: flex;
  width: 240px;
`

export const Status = styled.Text`
  font-size: 18px;
  color: #4169E1;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.2); /* Cor da linha separadora */
`

export const BattleResult = styled.Text`
  text-align: center;
  font-size: 18px;
  text-transform: capitalize;
  color: #000;
`