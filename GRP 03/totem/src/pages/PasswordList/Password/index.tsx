import {
  PasswordContainer,
  PasswordText,
  TimeContainer,
  Time,
  Date as PasswordDate,
} from './style'

import { Ticket } from '../../../types/ticket'

interface PasswordProps {
  ticket: Ticket
}

export default function Password({ ticket }: PasswordProps) {
  return (
    // @ts-ignore
    <PasswordContainer type={ticket.type}>
      <PasswordText>{ticket.id}</PasswordText>

      <TimeContainer>
        <Time>{ticket.createdAt.hour}</Time>
        <PasswordDate>{ticket.createdAt.date}</PasswordDate>
      </TimeContainer>
    </PasswordContainer>
  )
}
