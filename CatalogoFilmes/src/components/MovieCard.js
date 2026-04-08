import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image 
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} 
        style={styles.image}
      />
      <Text style={styles.title} numberOfLines={1}>{movie.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, margin: 8, backgroundColor: '#1f1f1f', borderRadius: 8, overflow: 'hidden' },
  image: { width: '100%', height: 250 },
  title: { color: '#fff', padding: 10, fontWeight: 'bold', textAlign: 'center' }
});