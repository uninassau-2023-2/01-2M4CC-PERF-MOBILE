import { Text, View, Button, Image } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { Camera, CameraType } from 'expo-camera';
import {
  CameraComponent,
  Container,
  ButtonContainer,
  ButtonCamera
} from '../Battle/style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { fetchRandomPokemon } from '../../services';
import { PokemonContext } from '../../contexts/Pokemon';
import Pokemon from '../../components/Pokemon';

function Battle() {
  const { handleNewPokemon, tab1Pokemon, tab2Pokemon } = useContext(PokemonContext)
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchRandomPokemon();
      const pokemon = {
        id: response.id,
        name: response.name,
        image: response.sprites.front_default || '',
        abilities: response.abilities.length,
        weight: response.weight,
        height: response.height,
        sprites: response.sprites,
      }

      handleNewPokemon({ tab: 'tab2', pokemon: pokemon })
    }
    try {
      fetchData();
    } catch (err) {
      console.log(err)
    }
  }, []);

  function handleCheckBattleResult() {
    if (tab1Pokemon && tab2Pokemon) {
      if (tab1Pokemon.abilities === tab2Pokemon.abilities) {
        return 'draw'
      }

      if (tab1Pokemon.abilities < tab2Pokemon.abilities) {
        return 'win'
      }

      if (tab1Pokemon.abilities > tab2Pokemon.abilities) {
        return 'lost'
      }
    }
  }

  const battleResult = handleCheckBattleResult()

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <Container>
      <Text>Battle</Text>

      {tab2Pokemon ? <Pokemon data={tab2Pokemon} battleResult={battleResult} /> : ''}

      <ButtonCamera onPress={() => setButtonClicked(prevState => !prevState)}>
        <Ionicons name="camera-outline" size={40} color={'#000'}></Ionicons>
      </ButtonCamera>

      {buttonClicked && (
        <CameraComponent type={type} style={{ height: 350, width: 350 }}>
          <ButtonContainer onPress={toggleCameraType}>
            <Ionicons
              name="reload-circle-outline"
              size={40}
              color={'#fff'}
            ></Ionicons>
          </ButtonContainer>
        </CameraComponent>
      )}
    </Container>
  );
}

export default Battle;
