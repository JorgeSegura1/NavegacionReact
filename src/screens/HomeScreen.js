import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Pantalla Home</Text>
        <Text style={styles.subtitle}>Listado de artículos</Text>

        <View style={styles.buttonGroup}>
          <Button
            title="Ir a Detalles (con params)"
            onPress={() =>
              navigation.navigate('Details', {
                itemId: 101,
                titulo: 'Articulo 101',
                autor: 'Equipo 3',
              })
            }
          />
          <View style={{ height: 10 }} />

          <Button
            title="Ir a Perfil (directo)"
            onPress={() =>
              navigation.navigate('Profile', {
                usuario: 'Jorge Isaac',
                itemFavorito: 'Articulo 99',
              })
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    elevation: 6,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#4A90E2',
    marginBottom: 16,
  },
  buttonGroup: {
    width: '100%',
  },
});
