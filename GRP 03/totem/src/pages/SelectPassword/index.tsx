import {
  Container,
  DesignTitle,
  ContainerLogo,
  TextType,
  ContainerButtons,
  Button,
  ButtonText,
} from './style'

import { useContext } from 'react'
import { TicketCTX, TicketContextTypes } from '../../contexts/TicketContext'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import Ionicons from '@expo/vector-icons/Ionicons'

import { formatDate } from '../../utils/formatDate'
import { formatTicketType } from '../../utils/formatTicketType'

type routeParams = {
  Tabs: undefined
}

export default function SelectPassword() {
  const { handleNewTicket } = useContext(TicketCTX) as TicketContextTypes

  const navigation = useNavigation<StackNavigationProp<routeParams>>()

  const handlePasswordSelection = (passwordType: string) => {
    const { hour, formatedDate } = formatDate(new Date().toString())

    const newTicket = {
      id: `AAAA${formatTicketType(passwordType)}`,
      type: passwordType,
      createdAt: {
        hour,
        formatedDate,
      },
    }

    // handleNewTicket(newTicket)
    console.log

    navigation.navigate('Tabs')
  }

  return (
    <Container>
      <DesignTitle />

      <ContainerLogo>
        <Ionicons name="color-filter-sharp" size={54} color="black" />
      </ContainerLogo>

      <TextType>Select your ticket type: </TextType>

      <ContainerButtons>
        <Button onPress={() => handlePasswordSelection('priority')}>
          <ButtonText>Priority</ButtonText>
        </Button>

        <Button onPress={() => handlePasswordSelection('general')}>
          <ButtonText>General</ButtonText>
        </Button>

        <Button onPress={() => handlePasswordSelection('withdrawl')}>
          <ButtonText>Withdrawl exams</ButtonText>
        </Button>
      </ContainerButtons>
    </Container>
  )
}
