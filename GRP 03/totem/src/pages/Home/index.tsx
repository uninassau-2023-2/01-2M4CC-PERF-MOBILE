import {
  Container,
  Button,
  ButtonText,
  ContainerText,
  DesignTitle,
  ContainerLogo,
  TextCustomer,
} from './style'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import Ionicons from '@expo/vector-icons/Ionicons'

type routeParams = {
  SelectPassword: undefined
}

export default function Home() {
  const navigation = useNavigation<StackNavigationProp<routeParams>>()

  return (
    <Container>
      <DesignTitle />

      <ContainerLogo>
        <Ionicons name="color-filter-sharp" size={54} color="black" />
      </ContainerLogo>

      <ContainerText>
        <TextCustomer>Welcome to our customer service</TextCustomer>
      </ContainerText>

      <Button onPress={() => navigation.navigate('SelectPassword')}>
        <ButtonText>Start</ButtonText>
      </Button>
    </Container>
  )
}
