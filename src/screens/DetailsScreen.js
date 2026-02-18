import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ navigation, route }) {
    const info = route?.params?.info;
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Pantalla Detalles</Text>
                {info && <Text style={styles.subtitle}>{info}</Text>}
                <View style={styles.buttonGroup}>
                    <Button
                        title="IR A INICIO"
                        color="#2196F3"
                        onPress={() => navigation.navigate('Home', { saludo: '¡Hola desde Detalles!' })}
                    />
                    <View style={{ height: 10 }} />
                    <Button
                        title="IR A PERFIL"
                        color="#4CAF50"
                        onPress={() => navigation.navigate('Profile', { username: 'detallesUser' })}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6fa',
    },
    box: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 32,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
        alignItems: 'center',
        minWidth: 280,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#222',
    },
    subtitle: {
        fontSize: 18,
        color: '#4CAF50',
        marginBottom: 16,
    },
    buttonGroup: {
        width: '100%',
    },
});