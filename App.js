import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, FlatList } from 'react-native';

import ContatoItem from './components/ContatoItem'
import ContatoInput from './components/ContatoInput'

export default function App() {

  const [contatos, setContatos] = useState([]);
  const [contador, setContador] = useState(0);

  const adicionarContato = (nomeContato, telefoneContato) => {
    setContatos(contatos => {
      setContador(contador + 1);
      return [{ key: contador.toString(), name: nomeContato, tel: telefoneContato }, ...contatos]
    })
  }
  const removerContato = (key) => {
    setContatos(contatos => {
      return contatos.filter((contato) => {
        return contato.key !== key;
      });
    });
  }
  return (
    <View style={styles.container} >
      <ContatoInput onAdicionarContato={adicionarContato} />
      <View>
        <View style={{ widht: '80%', alignSelf: 'center' }}>
          <FlatList
            data={contatos}
            renderItem={contato => (
              <ContatoItem
                nomeContato={contato.item.name}
                telefoneContato={contato.item.tel}
                chave={contato.item.key}
                onDelete={removerContato} />
            )} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '40'
  },
  contatoView: {
    alignItems: 'center',
    marginBottom: 12
  },
  contatoTextInput: {
    width: '200',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 4,
    textAlign: 'center'
  },
  contatoInputButton: {
    width: '80%'
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#DDD',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 16,
    alignItems: 'center',
    width: '80%'
  }
})