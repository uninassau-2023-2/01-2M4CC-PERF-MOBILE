import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, SafeAreaView, StyleSheet, View, FlatList,TouchableOpacity,Image, Pressable, Modal, Alert } from 'react-native';

const TelaCliente = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const [senhas, setSenhas] = useState([
      {momento:'2023/09/23', numero:'01510422', prioridade:'SP',},
      {momento:'2023/09/23', numero:'01224070', prioridade:'SG',}, 
      {momento:'2023/09/23', numero:'01534117', prioridade:'SE',},
      {momento:'2023/09/23', numero:'01538928', prioridade:'SP',},
      {momento:'2023/09/23', numero:'01533745', prioridade:'SG',},
      
            
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
      <Text style={styles.white}>Senha Chamada Atual</Text>
     </View>

     <View style={styles.igreja}>
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
     
      
        
      
        
      
      
    </View>
     <View style={styles.divbotao}>
      <Pressable
        style={[styles.buttonmais, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <AntDesign name="plus" size={24} color="white" />
      </Pressable>
    </View>
    <View>       
        <View style={styles.textRelatorio}>
          <Text  style={styles.boldh1}> Sua senha é: 2023/09/30-PP </Text>
        </View>
   
        <FlatList
        data={senhas}
        
        renderItem={({item}) =>  <Item item={item }/>}
        style={styles.flat}
      />
      
    </View>
    

    
    
    <View style={styles.centeredView}>
      
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>


        <View style={styles.divbclicaolatext}>
          <TouchableOpacity style={styles.row}>
            <View style={styles.bolinha1}></View>
            <Text style={styles.modalText}>SP</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.divbolatext}>
          <TouchableOpacity style={styles.row}>
            <View style={styles.bolinha2}></View>
            <Text style={styles.modalText}>SG</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divbolatext}>
          <TouchableOpacity style={styles.row}>
            <View style={styles.bolinha3}></View>
            <Text style={styles.modalText}>SE</Text>
          </TouchableOpacity>
        </View>
          

          
        <View style={styles.clica}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStylefecha}>Gerar chamado</Text>
          </Pressable></View>
          
        </View>
      </View>
    </Modal>
    
    </View>
    
  </View>
);
};

const styles = {
  container: {    
    flex: 1,    
    backgroundColor: '#ecf0f1',    
    fontWeight:700,
    
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
    justifyContent:'center',
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
    fontSize:16,
    marginBottom:10
  },
  boldh1:{
    fontWeight:700,
    color:'#5c5c5c',
    fontSize:20,
    marginBottom:10
  },
  header:{      
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#004699',
    paddingTop:70,
    flexDirection:'column'
  },
  black:{
    fontWeight:700,
    color:'white',
    fontSize:17,
    marginBottom:15
  },
  divbotao:{    
    width:'100%',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',    
    alignContent: 'flex-end',   
    position:'absolute',
    top:'80%',
    zIndex: 1
  },
  botao:{  
    alignContent:'center',
    justifyContent:'center',   
    alignItems:'center',    
    backgroundColor:'#004699',
    width:80,
    height:80,  
    borderRadius:100,     
  },
  
  imagem:{
    width:39,
    height:39,
    marginRight:20,
    marginBottom:15
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width:390,
    height:174,
    padding: 35,
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: '3%',
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor:'#004699',
    
  },
  buttonClose: {
    backgroundColor:'#004699',
  },
  textStyleabre: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:27
  },
  textStylefecha: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:15
  },
  modalText: {
    marginLeft:10,
    textAlign: 'center',
  },
  bolinha1: {
    backgroundColor:'#525252',
    padding:5,
    textAlign: 'center',
    borderRadius:100,
    width:5,
    height:5,
    marginHorizontal:2,
  },
  bolinha2: {
    backgroundColor:'#B9B9B9',
    padding:5,
    textAlign: 'center',
    borderRadius:100,
    width:5,
    height:5,
    marginHorizontal:2,
  },
  bolinha3: {
    backgroundColor:'#B9B9B9',
    padding:5,
    textAlign: 'center',
    borderRadius:100,
    width:5,
    height:5,
    marginHorizontal:2,
  },
  divbolatext:{
    marginBottom: 10,    
  },
  row: {
    alignItems:'center',
    alignContent:'center',    
    flexDirection:'row',
  },
  clica:{
    width:'100%',    
    alignItems:'flex-end', 
           
  },
  buttonmais: {
    alignItems:'center',
    alignContent:'center', 
    justifyContent:'center',
    borderRadius: 100,    
    width:51,
    height:51,
    marginRight:'8%',
  },
  igreja:{
    marginTop:12,
    flexDirection:'row',
    alignItems:'center',
  },
  white:{
    color:'white',
    fontSize:25,
    fontWeight:'bold',
  }
  
};

export default TelaCliente;