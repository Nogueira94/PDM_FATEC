import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const ContatoItem = (props) => {
    return (
        <TouchableOpacity onLongPress={() => {props.onDelete(props.chave)}}>
            <View style={styles.itemNaLista}>
                <Text>Nome:{props.nomeContato}</Text>
                <Text>Telefone:{props.telefoneContato}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#DDD',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 16,
        alignItems: 'center'
    }
})

export default ContatoItem;

