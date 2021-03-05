import React, {useState} from 'react';
import { View,TextInput, Button, StyleSheet, Text, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [nomeContato, setNomeContato] = useState('');
  const [telefoneContato, setTelContato] = useState('');
  const [contatos, setContatos] = useState([]);
  const [contador, setContador] = useState(0);
  const capturarNomeContato = (nomeContato) =>{
    setNomeContato(nomeContato);
  }
  const capturarTelContato = (telefoneContato) =>{
    setTelContato(telefoneContato);
  }
  const adicionarContato = () =>{
    setContatos(contatos => {
      setContador (contador + 1);
      return [{key: contador.toString(), name: nomeContato, tel: telefoneContato}, ...contatos]
    })
    // contatos = [a, b, c]
    //..contatos = a, b, c -> operador spread
    //console.log(contato);
  }
  return (
    <View style={styles.container} >
      <View style={styles.contatoView}>
        {/* Usuario ira inserir contatos, para comentar no JSX, abrir comentarios*/}
        <TextInput
          placeholder="Nome do Contato..."
          style={styles.contatoTextInput}
          onChangeText={capturarNomeContato}
        />
        <TextInput
          placeholder="Telefone do Contato..."
          style={styles.contatoTextInput}
          onChangeText={capturarTelContato}
        />

        <View
        style={styles.contatoInputButton}
        >
          <Button            
            title="+"
            onPress={adicionarContato}
          />
        </View>
      </View>
      <View>
      <View style={{widht: '80%',alignSelf:'center'}}>
        <FlatList
          data={contatos}
          renderItem={contato => (
            <View style={styles.itemNaLista}>
              <Text>Nome:{contato.item.name}</Text>              
              <Text>Telefone:{contato.item.tel}</Text>              
            </View>
            )}/>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:'40'
  },
  contatoView:{
    alignItems:'center',
    marginBottom:12
  },
  contatoTextInput:{
    width:'200',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 4,
    textAlign: 'center'  
  },
  contatoInputButton:{
    width:'80%'
  },
  itemNaLista:{
    padding: 12,
    backgroundColor: '#DDD',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom:8,
    borderRadius: 16,
    alignItems: 'center',
    width:'80%'
  }
})