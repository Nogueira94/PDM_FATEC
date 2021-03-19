import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button, 
  FlatList, 
  Keyboard, 
  StyleSheet, 
  Text,
  TextInput, 
  View 
} from 'react-native';


import keys from './keys';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {
  const [cidade, setCidade] = useState("");
  const [dados, setDados] = useState("");
  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }
  const obterDados = () => {
    setDados("");
    // setLatitude("");
    // setLongitude("");
    const target =  `${endPoint}${cidade}&appid=${apiKey}`;
    fetch(target)
    .then((data) => data.json())
    .then((data) => {
      obterSun(data["city"].coord)
    }).then(
      obterSun
    );
    
  }
  const obterSun = (coords) => {
    const target = `${endPointSun}lat=${coords.lat}&lon=${coords.lat}&appid=${apiKey}`
    fetch(target)
    .then((data) => data.json())
    .then((data) => {
      setDados(data["current"])
    });
  }
  const endPoint = `https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=`;
  const endPointSun = `https://api.openweathermap.org/data/2.5/onecall?units=metric&lang=pt_br&`
  const apiKey = keys.weatherMapApiKey;
  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput 
          style={styles.nomeCidade}
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button 
          title="OK"
          onPress={obterDados}
        />  
      </View>
     
     <PrevisaoItem
          tempo={dados}
     />

      {/* <FlatList 
        data={dados}
        renderItem={          
          data =>(
            <PrevisaoItem data={data} />
          )
        }
      /> */}
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