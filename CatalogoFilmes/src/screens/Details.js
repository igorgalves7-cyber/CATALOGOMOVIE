import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../services/api';

export default function Details({ route, navigation }) {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: movie.image_url }} 
        style={styles.banner}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.row}>
          <Text style={styles.info}>{movie.year} | ★ {movie.rating}</Text>
        </View>
        
        {/* AQUI FICA A SINOPSE DINÂMICA */}
        <Text style={styles.description}>
          {movie.description}
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>VOLTAR AO FLUXO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  banner: { width: '100%', height: 450 },
  content: { 
    marginTop: -30, 
    backgroundColor: COLORS.background, 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    padding: 30 
  },
  title: { fontSize: 32, fontWeight: 'bold', color: COLORS.text },
  row: { marginVertical: 10 },
  info: { color: COLORS.badgetText, fontSize: 18, fontWeight: 'bold' },
  description: { 
    color: COLORS.textSecondary, 
    fontSize: 16, 
    lineHeight: 24, 
    marginTop: 15,
    textAlign: 'justify' 
  },
  button: { 
    backgroundColor: COLORS.primary, 
    padding: 20, 
    borderRadius: 15, 
    marginTop: 30, 
    alignItems: 'center' 
  },
  buttonText: { color: '#fff', fontWeight: 'bold', letterSpacing: 1 }
});