import React from 'react';
import { 
  Image,
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

import Cartao from './Cartao'

const PrevisaoItem = (props) => {
  return (
    <Cartao estilos={styles.cartao}>
      <View style={styles.tela}>
        {/* <Image 
          style={styles.imagem}
          source={{ uri: `https://openweathermap.org/img/wn/${props.dados.weather[0].icon}.png`}}
        /> */}
        <View>
          <View style={styles.segundaLinha}>
            <Text style={styles.valor}>
              {/* {`Sunrise: ${new Date(props.dados.sunrise * 1000).toLocaleTimeString()}`} */}
            </Text>
            <Text style={styles.valor}>
              {/* {`Sunset: ${new Date(props.dados.sunrise * 1000).toLocaleTimeString()}`} */}
            </Text>
            <Text style={styles.valor}>
              {/* {`Feels Like: ${props.data.feels_like}`} */}
            </Text>
          </View>
        </View>
      </View>
    </Cartao>
  )
};

export default PrevisaoItem;

const styles = StyleSheet.create({
  cartao: {
    marginBottom: 8
  },
  tela: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly'
  },
  primeiraLinha: {
    marginTop: 7,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  segundaLinha: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#DDD'
  },
  imagem: {
    width: 50,
    height: 50
  },
  valor: {
    marginHorizontal: 2
  }
});