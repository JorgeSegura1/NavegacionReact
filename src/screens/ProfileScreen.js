import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation, route }) {
  // recibir params enviados desde Details o Home
  const { usuario, itemFavorito } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Perfil</Text>

        <Text style={styles.label}>Usuario:</Text>
        <Text style={styles.value}>{usuario ?? 'No definido'}</Text>

        <Text style={styles.label}>Item favorito:</Text>
        <Text style={styles.value}>{itemFavorito ?? 'No definido'}</Text>

        <View style={{ height: 14 }} />

        <View style={styles.buttonGroup}>
          <Button title="Volver a Home" onPress={() => navigation.popToTop()} />
          <View style={{ height: 8 }} />
          <Button title="Ir a Detalles" onPress={() => navigation.navigate('Details', { itemId: 202, titulo: 'Desde Perfil', autor: usuario ?? 'Anon' })} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7ee',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#b35400',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#777',
    marginTop: 8,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  buttonGroup: {
    marginTop: 12,
  },
});
