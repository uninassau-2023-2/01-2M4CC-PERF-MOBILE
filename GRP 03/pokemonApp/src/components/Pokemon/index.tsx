import { View, Text, Image } from "react-native";
import { TPoke } from "../../types";
import { BattleResult, Name, NoImageText, PokemonContainer, PokemonPicture, PokemonPictureContainer, Status, StatusContainer } from "./style";

type battleResult = 'draw' | 'lost' | 'win'

type propsPoke = {
  data: TPoke;
  battleResult?: battleResult
};

function Pokemon(props: propsPoke) {
  const { name, weight, height, sprites, abilities, } = props.data;
  const battleResult = props.battleResult

  return (
    <PokemonContainer>
      {sprites.front_default !== null ? (
        <PokemonPictureContainer>
          {battleResult ? (
            <View>
              <Name style={battleResult === 'draw' ? { color: '#FFD700' } :
                (battleResult === 'lost' ? { color: '#3BB143' } :
                  { color: '#E4404F' })}>
                {name}
              </Name>
              <BattleResult>
                {battleResult === 'draw' ? 'Empate' : (battleResult === 'lost' ? 'Perdeu' : 'Ganhou')}
              </BattleResult>
            </View>
          ) :
            <Name>
              {name}
            </Name>
          }
          <PokemonPicture source={{ uri: sprites.front_default }} style={{ width: 280, height: 240 }} />
        </PokemonPictureContainer>
      ) : (
        <NoImageText>No image available</NoImageText>
      )}
      <StatusContainer>
        <Status>Peso: {weight / 10}Kg</Status>
        <Status>Altura: {height / 10}m</Status>
        <Status>Habilidades: {abilities}</Status>
      </StatusContainer>
    </PokemonContainer>
  );
}

export default Pokemon;
