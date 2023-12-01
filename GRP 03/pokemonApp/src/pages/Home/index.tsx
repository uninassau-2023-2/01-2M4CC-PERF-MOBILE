import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from 'react';
import { TCep, TPoke } from '../../types';
import { fetchRandomPokemon, fetchCep } from '../../services';
import Location from '../../components/Location';
import Pokemon from '../../components/Pokemon';
import { Container, Input, ButtonInput } from './style';
import { PokemonContext } from '../../contexts/Pokemon';

function Home() {
  const { handleNewPokemon } = useContext(PokemonContext)
  const [cep, setCep] = useState('');
  const [responseCep, setResponseCep] = useState<TCep[]>([]);
  const [responsePoke, setResponsePoke] = useState<TPoke[]>([]);
  const [error, setError] = useState<string>('');

  async function fetchApi(cep: string) {
    try {
      const dataCep = await fetchCep(cep);
      if (dataCep.erro) {
        setError('CEP não encontrado. Por favor, tente novamente.');
        return;
      }
      setResponseCep([dataCep]);
      const dataPoke = await fetchRandomPokemon();
      if (dataPoke) {
        setResponsePoke([{ ...dataPoke, abilities: dataPoke.abilities.length }]);
        handleNewPokemon({ tab: 'tab1', pokemon: { ...dataPoke, abilities: dataPoke.abilities.length } })
      }
    } catch (error) {
      setError('Ocorreu um erro na requisição. Por favor, tente novamente.');
    }
  }

  function handleButton() {
    fetchApi(cep);
    setCep('');
    setError('');
    responseCep.length > 0 && setResponseCep([]);
    responsePoke.length > 0 && setResponsePoke([]);
  }

  const handleCepChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue.length <= 8) {
      setCep(numericValue);
    }
  };

  return (
    <Container>
      <StatusBar style="dark" />
      <Input
        onChangeText={handleCepChange}
        placeholder="CEP"
        keyboardType="numeric"
        returnKeyType="done"
        value={cep}
      ></Input>
      <ButtonInput onPress={handleButton}>
        <Text>Buscar</Text>
      </ButtonInput>
      {error && <Text>{error}</Text>}
      {responseCep.map(dataCep => (
        <Location data={dataCep} key={dataCep.logradouro} />
      ))}
      {responsePoke.map(dataPoke => (
        <Pokemon data={dataPoke} key={dataPoke.id} />
      ))}
    </Container>
  );
}

export default Home;
