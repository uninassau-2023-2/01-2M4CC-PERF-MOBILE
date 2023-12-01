import { Container, PasswordList, Title, Scroll } from './style'

// import { useContext } from 'react';
// import { TicketCTX } from '../../contexts/TicketContext';
// import { TicketContextTypes } from '../../contexts/TicketContext';

import AsyncStorage from '@react-native-async-storage/async-storage'

import Password from './Password'
import { useEffect, useState } from 'react'
import { Ticket } from '../../types/ticket'

const DEFAULT_TICKETS = [
  {
    id: 'SG-111',
    createdAt: {
      hour: '11:11',
      date: '22/22/22',
    },
    type: 'general',
  },
  {
    id: 'SP-222',
    createdAt: {
      hour: '11:11',
      date: '22/22/22',
    },
    type: 'priority',
  },
  {
    id: 'SG-333',
    createdAt: {
      hour: '11:11',
      date: '22/22/22',
    },
    type: 'general',
  },
  {
    id: 'SG-444',
    createdAt: {
      hour: '11:11',
      date: '22/22/22',
    },
    type: 'general',
  },
  {
    id: 'PW-555',
    createdAt: {
      hour: '11:11',
      date: '22/22/22',
    },
    type: 'withdrawl',
  },
  {
    id: 'PG-666',
    createdAt: {
      hour: '11:11',
      date: '22/22/22',
    },
    type: 'priority',
  },
  {
    id: 'GW-777',
    createdAt: {
      hour: '11:11',
      date: '22/22/22',
    },
    type: 'general',
  },
  {
    id: 'PW-888',
    createdAt: {
      hour: '11:11',
      date: '22/22/22',
    },
    type: 'withdrawl',
  },
  {
    id: 'PG-999',
    createdAt: {
      hour: '11:11',
      date: '22/22/22',
    },
    type: 'priority',
  },
]


export default function TicketsScreen() {
  const [tickets, setTickets] = useState(DEFAULT_TICKETS)

  const handleUpdateTickets = async () => {
    const previewTickets = await AsyncStorage.getItem('tickets')
    // setTickets(JSON.parse(previewTickets))
    console.log('a', tickets)
  }

  useEffect(() => {
    handleUpdateTickets()
  }, [])

  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
        <Title>Current Ticket</Title>
        <Password
          ticket={{
            id: 'SG-111',
            createdAt: {
              hour: '11:11',
              date: '22/22/22',
            },
            type: 'user',
          }}
        />

        <Title>Waiting Tickets</Title>

        <PasswordList>
          {tickets?.map((ticket) => (
            <Password
              ticket={{
                id: ticket.id,
                createdAt: ticket.createdAt,
                type: ticket.type,
              }}
            />
          ))}
        </PasswordList>
      </Scroll>
    </Container>
  )
}
