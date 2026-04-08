import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { COLORS } from '../services/api';

export default function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Image 
        source={{ uri: movie.image_url }} 
        style={styles.image}
      />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>★ {movie.rating}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title} numberOfLines={1}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { 
    flex: 1, 
    margin: 10, 
    height: 350, // Aumentei um pouco para o PC
    borderRadius: 15, 
    backgroundColor: COLORS.surface,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(138, 43, 226, 0.3)',
  },
  image: { width: '100%', height: '100%', position: 'absolute' },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  badgeText: { color: COLORS.badgetText, fontWeight: 'bold', fontSize: 12 },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 15,
    backgroundColor: 'rgba(10, 10, 11, 0.9)',
  },
  title: { color: COLORS.text, fontWeight: 'bold', fontSize: 16 },
  year: { color: COLORS.textSecondary, fontSize: 13, marginTop: 4 }
});