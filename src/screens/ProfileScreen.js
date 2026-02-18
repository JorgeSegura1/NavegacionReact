import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ route, navigation }) => {
  const { username } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <Text style={styles.title}>Pantalla de Perfil</Text>
        <Text style={styles.usernameLabel}>Usuario:</Text>
        <Text style={styles.username}>{username || 'No definido'}</Text>
        <Text style={styles.sectionTitle}>Lo que espero de la materia:</Text>
        <Text style={styles.sectionText}>
          Espero profundizar en el desarrollo de aplicaciones móviles modernas, aprender buenas prácticas y dominar herramientas como React Native para crear apps eficientes y atractivas.
        </Text>
        <Text style={styles.sectionTitle}>Lo que me gustaría aprender:</Text>
        <Text style={styles.sectionText}>
          Me gustaría entender las falacias comunes en la programación con React, cómo evitarlas y cómo adaptar correctamente proyectos web a plataformas móviles, aprovechando al máximo el potencial de React Native.
        </Text>
        <View style={styles.buttonGroup}>
          <Button
            title="Ir a Home"
            color="#2196F3"
            onPress={() => navigation.navigate('Home', { saludo: '¡Hola desde Perfil!' })}
          />
          <View style={{ height: 10 }} />
          <Button
            title="Ir a Detalles"
            color="#4CAF50"
            onPress={() => navigation.navigate('Details', { info: 'Perfil a Detalles' })}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
  },
  profileBox: {
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
  usernameLabel: {
    fontSize: 18,
    color: '#888',
    marginBottom: 4,
  },
  username: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2196F3',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  buttonGroup: {
    width: '100%',
  },
});

export default ProfileScreen;
