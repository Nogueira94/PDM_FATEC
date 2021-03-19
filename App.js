import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Keyboard } from 'react-native';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {
  const [previsoes, setPrevisoes] = useState([]);
  const [cidade, setCidade] = useState('');
  const [weather, setWeather] = useState([]);

  const getData = () => {
    const target = endPoint + cidade + "&appid=" + apiKey;
    fetch(target)
    .then((dados) => {
      return dados.json()
    })
    .then((dados) => {
      obtemPrevisoes(dados["city"].coord);
      Keyboard.dismiss()
    });
  }

  const obtemPrevisoes = (coordenadas) => {
    setPrevisoes([]);
    const target = apiLink + coordenadas.lat + "&lon=" + coordenadas.lon + "&exclude=hourly,daily&appid=" + apiKey;
    console.log(target)
    fetch(target)
    .then((dados) => {
      return dados.json()
    })
    .then((dados) => {
      setPrevisoes(dados["current"])
      setWeather(dados["current"].weather[0])
    });
  }

  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }

  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt&units=metric&q=";
  const apiLink = "https://api.openweathermap.org/data/2.5/onecall?lat=";
  const apiKey = '7dcb6e5f7579133b1c8455cd6ef65ee3';
  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
          value={cidade}
          onPress={console.log(previsoes.length)}
          onChangeText={capturarCidade}
        />
        <Button
          title="Ok"
          onPress={getData}
        />        
      </View>
      
            <PrevisaoItem 
              previsao={previsoes}
              weather={weather}
            />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white"
  },
  nomeCidade: {
    padding: 12,
    borderBottomColor: "#BB96F3",
    borderBottomWidth: 2,
    textAlign: "center",
    marginBottom: 8
  },
  entrada: {
    marginBottom: 12
  }
});
  
