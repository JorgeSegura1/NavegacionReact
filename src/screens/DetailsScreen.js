import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ navigation, route }) {
  // leer params enviados desde Home (o desde otra pantalla)
  const { itemId, titulo, autor } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Detalles</Text>

        <Text style={styles.label}>ID:</Text>
        <Text style={styles.value}>{itemId ?? 'No definido'}</Text>

        <Text style={styles.label}>Título:</Text>
        <Text style={styles.value}>{titulo ?? 'No definido'}</Text>

        <Text style={styles.label}>Autor:</Text>
        <Text style={styles.value}>{autor ?? 'No definido'}</Text>

        <View style={{ height: 12 }} />

        <View style={styles.buttonGroup}>
          <Button
            title="Ir a Perfil (con params desde Details)"
            onPress={() =>
              navigation.navigate('Profile', {
                usuario: autor ?? 'Autor desconocido',
                itemFavorito: titulo ?? 'Artículo desconocido',
              })
            }
          />
          <View style={{ height: 8 }} />
          <Button title="Volver" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef7f6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0b6b63',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
  },
  value: {
    fontSize: 18,
    color: '#222',
    fontWeight: '600',
  },
  buttonGroup: {
    marginTop: 12,
  },
});
