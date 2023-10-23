import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  position: relative;
  bottom: 55px;
  color: #fff;
`

export const Button = styled(TouchableOpacity)`
  background-color: #40db8e;
  padding: 10px 40px;
  border-radius: 30px;
  margin: 30px 0;
`

export const ButtonText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`

export const ImageLogo = styled.Image`
  width: 300px;
  height: 300px;
`

export const ContainerText = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background-color: transparent;
  width: 300px;
  border-radius: 15px;
  border: 1px solid #000;
  margin-top: 140px;
`

export const TextCustomer = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

export const DesignTitle = styled.View`
  width: 100%;
  height: 40%;
  background-color: #000;
  padding: 40px 0;
  border-bottom-left-radius: 170px;
  border-bottom-right-radius: 170px;
`

export const ContainerLogo = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  background-color: #40db8e;
  border-radius: 100%;
  position: relative;
  bottom: 50px;
`
