import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState('1');
  const [numeros, setNumeros] = useState([]);
  var numero_aleatorio = 0;

  const adicionarNumero = () => { 
    setNumero(numeros => [numero, ...numeros]);
  }

  const geraNumeroAleatorio = () => {
    numero_aleatorio = Math.floor(Math.random() * 60);
  }

  return (
    <View>
      <View style={{padding: 40}}>
        <Text>{numero_aleatorio}</Text>
        <Button 
          title="Gerar numero"
          onPress={geraNumeroAleatorio}
        />
      </View>
      <View>
        {
        numeros.map((numero) => <Text>{numero_aleatorio}</Text>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
