import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Details({ route, navigation }) {
  // Evita crash se tentar entrar na tela sem dados
  if (!route.params?.movie) return null;
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>← Voltar</Text>
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Image source={{ uri: movie.image }} style={styles.poster} />
        <View style={styles.info}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year} • ⭐ {movie.rating}</Text>
          <Text style={styles.desc}>{movie.desc}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0b', padding: 50 },
  backBtn: { marginBottom: 30, padding: 12, backgroundColor: '#1a1a1a', width: 120, borderRadius: 8, alignItems: 'center' },
  content: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  poster: { width: 350, height: 500, borderRadius: 20 },
  info: { flex: 1, minWidth: 300, marginLeft: 50 },
  title: { color: '#fff', fontSize: 50, fontWeight: 'bold' },
  year: { color: '#8A2BE2', fontSize: 22, marginVertical: 15, fontWeight: 'bold' },
  desc: { color: '#ccc', fontSize: 18, lineHeight: 28 },
});