import styled from 'styled-components/native';
export const Container = styled.View`
  display: flex;

  justify-content: flex-start;
  align-items: center;
  padding: 50px 16px 0 16px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ButtonInput = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  color: #000;
`;