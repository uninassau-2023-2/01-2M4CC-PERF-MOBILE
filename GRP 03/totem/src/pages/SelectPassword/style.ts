import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  display: flex;
  align-items: center;
`

export const DesignTitle = styled.View`
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
`

export const ContainerLogo = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  background-color: #40db8e;
  border-radius: 100px;
  position: relative;
  bottom: 50px;
  width: 100px;
`

export const TextType = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`

export const ContainerButtons = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  width: 80%;
`

export const Button = styled(TouchableOpacity)`
  background-color: transparent;
  padding: 20px 40px;
  border-radius: 30px;
  margin: 30px 0;
  width: 100%;
  border: 2px solid #40db8e;
`

export const ButtonText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`
