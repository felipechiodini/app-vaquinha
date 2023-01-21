import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const HomeScreen = ({ navigation }) => {
    const [cowfunds, setCowfunds] = useState([]);

    useEffect(() => {
        SQLite.openDatabase({
            name: 'cowfunds.db',
            location: 'default'
        }).then((db) => {
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM cowfunds', [], (tx, results) => {
                    const rows = results.rows;
                    const cowfundsData = [];
                    for (let i = 0; i < rows.length; i++) {
                        cowfundsData.push(rows.item(i));
                    }
                    setCowfunds(cowfundsData);
                });
            });
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={cowfunds}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('CowfundDetails', { cowfundId: item.id })}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemValue}>{item.value}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    itemName: {
        fontSize: 18,
    },
    itemValue: {
        fontSize: 18,
    }
});

export default HomeScreen;
