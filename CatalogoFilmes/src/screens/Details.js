import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Details({ route }) {
  const { movie } = route.params; // Recebe o filme que foi clicado

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} 
        style={styles.banner} 
      />
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.description}>
          Este é um MVP de catálogo. Aqui viria a sinopse detalhada do filme vinda da API do TMDB.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a' },
  banner: { width: '100%', height: 450, resizeMode: 'cover' },
  content: { padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  description: { fontSize: 16, color: '#ccc', lineHeight: 24 }
});