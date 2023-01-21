import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const VaquinhaForm = () => {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');

    const handleSubmit = () => {
        SQLite.openDatabase({
            name: 'vaquinhas.db',
            location: 'default'
        }).then((db) => {
            db.transaction((tx) => {
                tx.executeSql('INSERT INTO vaquinhas (nome, valor) VALUES (?, ?)', [nome, valor]);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <View>
            <Text>Nome da vaquinha:</Text>
            <TextInput
                value={nome}
                onChangeText={(text) => setNome(text)}
                placeholder="Digite o nome da vaquinha"
            />
            <Text>Valor da vaquinha:</Text>
            <TextInput
                value={valor}
                onChangeText={(text) => setValor(text)}
                placeholder="Digite o valor da vaquinha"
                keyboardType='numeric'
            />
            <Button
                title="Salvar"
                onPress={handleSubmit}
            />
        </View>
    );
}

export default VaquinhaForm;
