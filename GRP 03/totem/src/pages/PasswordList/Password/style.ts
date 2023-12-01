import styled from 'styled-components/native'

export type TypeStyles = string

interface PasswordStylesProps {
  isUserPassword: boolean
  type: TypeStyles
}

const formatTypeStyles = (type: TypeStyles): string => {
  const styles = {
    user: '#40DB8E',
    general: 'white',
    priority: 'lightyellow',
    withdrawl: 'blue',
  }
  // @ts-ignore
  return styles[type]
}

export const PasswordContainer = styled.View<PasswordStylesProps>`
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: ${({ type }) => formatTypeStyles(type)};
  border: 1px solid black;
`

export const PasswordText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`

export const TimeContainer = styled.View`
  align-items: flex-end;
`

export const Date = styled.Text`
  font-size: 14px;
`

export const Time = styled.Text`
  font-size: 14px;
`
