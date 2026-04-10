import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { COLORS } from '../services/api';

export default function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress} 
      activeOpacity={0.7}
    >
      <Image source={{ uri: movie.image }} style={styles.poster} />
      <View style={styles.overlay}>
        <Text style={styles.title} numberOfLines={1}>{movie.title}</Text>
        <Text style={styles.rating}>⭐ {movie.rating}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 300,
    marginRight: 20,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
    overflow: 'hidden',
    // Sombra para dar profundidade no PC
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  poster: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  rating: {
    color: '#ffeb3b',
    fontSize: 12,
    marginTop: 4,
  },
});