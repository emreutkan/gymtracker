import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to FitTracker!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});