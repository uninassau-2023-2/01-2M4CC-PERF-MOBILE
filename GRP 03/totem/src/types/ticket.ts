import { TypeStyles } from '../pages/PasswordList/Password/style'

export interface Ticket {
  id: string
  createdAt: {
    hour: string
    date: string
  }
  type: TypeStyles
}
