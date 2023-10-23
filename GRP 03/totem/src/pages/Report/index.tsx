import { ScrollView } from 'react-native'
import { Container, Card, Title, InfoText } from './style'

const ReportScreen = () => {
  return (
    <Container>
      <ScrollView>
        <Card>
          <Title>Relatório de Senhas Chamadas</Title>
          <InfoText>Quantidade total de senhas emitidas: 100</InfoText>
          <InfoText>Quantidade total de senhas atendidas: 80</InfoText>
        </Card>
        <Card>
          <InfoText>Quantidade de senhas emitidas por prioridade:</InfoText>
        </Card>
        <Card>
          <InfoText>Quantidade de senhas atendidas por prioridade:</InfoText>
        </Card>
        <Card>
          <InfoText>Relatório detalhado das senhas:</InfoText>
        </Card>
        <Card>
          <InfoText>Relatório do TM:</InfoText>
        </Card>
      </ScrollView>
    </Container>
  )
}

export default ReportScreen
