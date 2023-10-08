import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, SafeAreaView, StyleSheet, View, FlatList } from 'react-native';

const TelaRelatorio = () => {

  const [senhas, setSenhas] = useState([
    {momento:'10/09/23', horario:'123', prioridade:'PP'},
    {momento:'10/09/23', horario:'456', prioridade:'PP'}, 
    {momento:'10/09/23', horario:'789', prioridade:'PP'},
])

const Item = ({item}) => (
<View style={styles.senhasRelatorios}>
  <View style={styles.senhaRelatorio}>
    <Text style={[styles.textAluno, styles.bold]}> {item.momento} - {item.horario} - {item.prioridade} </Text>
  </View>
</View>
);

return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text  style={styles.bold}>Senhas emitidas: 910</Text>
      <View style={styles.senhasEmitidas}>
        <View style={styles.senhas}><Text  style={styles.bold}>303</Text><Text  style={styles.bold}>SP</Text></View>
        <View style={styles.senhas}><Text  style={styles.bold}>303</Text><Text  style={styles.bold}>SG</Text></View>
        <View style={styles.senhas}><Text  style={styles.bold}>304</Text><Text  style={styles.bold}>SE</Text></View>
      </View>
    </View>

    <View style={styles.header}>
      <Text  style={styles.bold}> Total de senhas atendidas: 340</Text>
      <View style={styles.senhasEmitidas}>
        <View style={styles.senhas}><Text  style={styles.bold}>230</Text><Text  style={styles.bold}>SP</Text></View>
        <View style={styles.senhas}><Text  style={styles.bold}>230</Text><Text  style={styles.bold}>SG</Text></View>
        <View style={styles.senhas}><Text  style={styles.bold}>230</Text><Text  style={styles.bold}>SE</Text></View>
      </View>
    </View>

    <View>

      <View style={styles.textRelatorio}><Text  style={styles.bold}> Relatorio detalhado </Text><Text  style={styles.bold}>Todos    <AntDesign name="rightcircleo" size={16} color="black" /></Text></View>
      <FlatList
      data={senhas}
      
      renderItem={({item}) => <Item item={item}/>}
      style={styles.flat}
    />
    </View>

    <View></View>
  </View>
);
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#A9A9A9',
    
    paddingTop:70,
    fontWeight:700
  },
  senhasEmitidas:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:10
  },
  senhas:{
    backgroundColor:'#696969',
    width:70,
    height:40,
    alignItems:'center',
    borderRadius:5
  },
  textRelatorio:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20
  },
  senhasRelatorios:{
    alignItems:'center',
    width:'100%',
    
  },
  senhaRelatorio:{
    marginVertical:1,
    backgroundColor:'#696969',
    
    width:'100%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    
  },
  bold:{
    fontWeight:700,
    color:'#F0FFFF'
  },
  header:{
    marginHorizontal:10,
    marginVertical:5
  }
  
};

export default TelaRelatorio;