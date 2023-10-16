import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, SafeAreaView, StyleSheet, View, FlatList,TouchableOpacity,Image } from 'react-native';


const TelaAtendente = () => {

  const [senhas, setSenhas] = useState([
    {momento:'2023/09/23', numero:'01510422', prioridade:'SP',},
    {momento:'2023/09/23', numero:'01224070', prioridade:'SG',},
    {momento:'2023/09/23', numero:'01534117', prioridade:'SE',},
    {momento:'2023/09/23', numero:'01538928', prioridade:'SP',},
    {momento:'2023/09/23', numero:'01533745', prioridade:'SG',},
    {momento:'2023/09/23', numero:'01528288', prioridade:'SE',},
])

const Item = ({item}) => (
<View style={styles.senhasRelatorios}>
  <View style={styles.senhaRelatorio}>
    <Text style={[styles.textAluno, styles.bold]}> {item.momento} - Num {item.numero} - {item.prioridade} </Text>
  </View>
</View>
);

  return (
    <View style={styles.container}>

      <View style={styles.header}>

       <View>
        <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/4320/4320350.png',
            }}
            style={styles.imagem}
          />
          </View>
       <View>
        <Text  style={styles.black}> Guiche #7</Text>
       </View>

      </View>

      <View>

          <View style={styles.textRelatorio}>
            <Text  style={styles.bold}> Senhas aguardando </Text>
            <TouchableOpacity>
              <Text  style={styles.bold}>Todos    <AntDesign name="rightcircleo" size={16} color="black" /></Text>
            </TouchableOpacity>
          </View>

        <FlatList
        data={senhas}

        renderItem={({item}) => <Item item={item}/>}
        style={styles.flat}
      />
      </View>
      <View style={styles.divbotao}>
        <TouchableOpacity style={styles.botao}>
              <Text style={styles.textbotao}>Finalizar Chamado Atual</Text>
        </TouchableOpacity>
       </View>

    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    fontWeight:700
  },
  senhasEmitidas:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:10
  },
  senhas:{
    backgroundColor:'white',
    width:100,
    height:53,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  textRelatorio:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    marginTop:30
  },
  senhasRelatorios:{
    alignItems:'center',
    width:'100%',

  },
  senhaRelatorio:{
    marginVertical:1,
    backgroundColor:'white',

    width:'100%',
    height:45,
    alignItems:'center',
    justifyContent:'center',

  },
  bold:{
    fontWeight:700,
    color:'#5c5c5c',
    fontSize:14,
    marginBottom:10
  },
  header:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#004699',
    paddingTop:70,
    flexDirection:'row'
  },
  black:{
    fontWeight:700,
    color:'white',
    fontSize:17,
    marginBottom:15
  },
  divbotao:{
    width:'100%',
    height:'40%',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  botao:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#004699',
    height:40,
    borderRadius:8,
    width:200,
    padding:10,
    marginRight:'5%',
  },
  textbotao:{
    fontWeight:700,
    color:'white',
    fontSize:14,

  },

  imagem:{
    width:39,
    height:39,
    marginRight:20,
    marginBottom:15
  },

};

export default TelaAtendente;