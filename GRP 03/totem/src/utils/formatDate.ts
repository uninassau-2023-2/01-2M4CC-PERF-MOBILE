interface FormatDateTypes {
  hour: string
  formatedDate: string
}

const formatDate = (rawDate: string): FormatDateTypes => {
  const date = new Date(rawDate)

  const hour = `${date.getHours().toString().padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString().slice(2)

  const formatedDate = `${day}/${month}/${year}`

  return {
    hour,
    formatedDate,
  }
}

export { formatDate }
