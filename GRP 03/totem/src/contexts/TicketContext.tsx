import { ReactNode, createContext, useState, SetStateAction } from 'react'

import { Ticket } from '../types/ticket'

export interface TicketContextTypes {
  tickets: Ticket[]
  handleNewTicket: (ticket: Ticket) => void
}

export const TicketCTX = createContext<TicketContextTypes | null>(null)

interface TicketContextProps {
  children: ReactNode
}

export default function TicketContext({ children }: TicketContextProps) {
  const [tickets, setTickets] = useState<Ticket[]>([])

  const handleNewTicket = (ticket: any) => {
    setTickets((prev) => {
      return {
        ...prev,
        ticket,
      }
    })
  }

  return (
    <TicketCTX.Provider
      value={{
        tickets,
        handleNewTicket,
      }}
    >
      {children}
    </TicketCTX.Provider>
  )
}
