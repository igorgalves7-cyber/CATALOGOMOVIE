import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../services/api';

export default function HeroBanner({ movie }) {
  if (!movie) return null;

  return (
    <ImageBackground 
      source={{ uri: movie.image }} 
      style={styles.banner}
      resizeMode="cover"
    >
      <View style={styles.gradient}>
        <Text style={styles.topPick}>DESTAQUE DE HOJE</Text>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.playBtn}>
            <Text style={styles.playText}>▶ Assistir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoBtn}>
            <Text style={styles.infoText}>+ Minha Lista</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 550, // Altura ideal para telas de PC
    justifyContent: 'flex-end',
  },
  gradient: {
    padding: 60,
    backgroundColor: 'rgba(10, 10, 11, 0.4)', // Efeito de sombra no fundo
    backgroundImage: 'linear-gradient(to top, #0a0a0b, transparent)', // Só funciona na Web
  },
  topPick: { color: COLORS.primary, fontWeight: 'bold', letterSpacing: 2, marginBottom: 10 },
  title: { color: '#fff', fontSize: 60, fontWeight: '900', marginBottom: 20 },
  row: { flexDirection: 'row' },
  playBtn: { backgroundColor: '#fff', paddingHorizontal: 30, paddingVertical: 12, borderRadius: 5, marginRight: 15 },
  playText: { color: '#000', fontWeight: 'bold', fontSize: 18 },
  infoBtn: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 30, paddingVertical: 12, borderRadius: 5 },
  infoText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
});