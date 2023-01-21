import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const ContributorForm = () => {
    const [cowfundId, setCowfundId] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = () => {
        SQLite.openDatabase({
            name: 'cowfunds.db',
            location: 'default'
        }).then((db) => {
            db.transaction((tx) => {
                tx.executeSql('INSERT INTO contributors (name, cowfund_id) VALUES (?, ?)', [name, cowfundId]);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <View>
            <Text>Cowfund Id:</Text>
            <TextInput
                value={cowfundId}
                onChangeText={(text) => setCowfundId(text)}
                placeholder="Enter the cowfund id"
                keyboardType='numeric'
            />
            <Text>Contributor Name:</Text>
            <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Enter the contributor name"
            />
            <Button
                title="Save"
                onPress={handleSubmit}
            />
        </View>
    );
}

export default ContributorForm;
