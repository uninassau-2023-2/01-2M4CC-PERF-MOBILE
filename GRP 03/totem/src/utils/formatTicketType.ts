export const formatTicketType = (type: string): string => {
  const types = {
    general: 'SG',
    priority: 'SP',
    withdrawl: 'SE',
  }

  // @ts-ignore
  return types[type]
}
