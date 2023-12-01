import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 0 40px;
  background-color: #fff;
`
export const Scroll = styled.ScrollView`
  margin-top: 60px;
`

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 14px;
  font-weight: bold;
`

export const PasswordList = styled.View`
  display: flex;
  gap: 16px;
`

export const PasswordContainer = styled.View`
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: #fff;
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
