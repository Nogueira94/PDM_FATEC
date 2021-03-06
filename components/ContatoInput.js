import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ContatoInput = (props) => {

    const [nomeContato, setNomeContato] = useState('');
    const [telefoneContato, setTelContato] = useState('');
    const capturarNomeContato = (nomeContato) => {
        setNomeContato(nomeContato);
    }
    const capturarTelContato = (telefoneContato) => {
        setTelContato(telefoneContato);
    }

    return (
        <View style={styles.contatoView}>
            <TextInput
                placeholder="Nome do Contato..."
                style={styles.contatoTextInput}
                onChangeText={(capturarNomeContato)}
                value={nomeContato}
            />
            <TextInput
                placeholder="Telefone do Contato..."
                style={styles.contatoTextInput}
                onChangeText={capturarTelContato}
                value={telefoneContato}
            />

            <View
                style={styles.contatoInputButton}
            >
                <Button
                    title="+"
                    onPress={() => {
                        props.onAdicionarContato(nomeContato,telefoneContato);
                        setNomeContato('')
                        setTelContato('')
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default ContatoInput