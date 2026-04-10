import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { CATEGORIES, COLORS } from '../services/api';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Text style={styles.logo}>AURA<Text style={{color: '#fff'}}>STREAM</Text></Text>
        
        {CATEGORIES.map((category) => (
          <View key={category.id} style={styles.section}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            
            <View style={styles.listContainer}>
              <FlatList
                data={category.movies}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContent}
                renderItem={({ item }) => (
                  <TouchableOpacity 
                    style={styles.card}
                    onPress={() => navigation.navigate('Details', { movie: item })}
                  >
                    <Image source={{ uri: item.image }} style={styles.poster} />
                    <View style={styles.cardInfo}>
                      <Text style={styles.movieTitle} numberOfLines={1}>{item.title}</Text>
                      <Text style={styles.movieRating}>⭐ {item.rating}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        ))}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0b' },
  logo: { color: '#8A2BE2', fontSize: 45, fontWeight: '900', textAlign: 'center', marginVertical: 40, letterSpacing: 8 },
  section: { marginBottom: 35, width: '100%' },
  categoryTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  
  // Container que ajuda a centralizar a lista no PC
  listContainer: {
    width: '100%',
    alignItems: 'center',
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'center', // Centraliza os cards
    paddingHorizontal: 20,
  },
  card: { 
    width: 220, 
    height: 330, 
    marginHorizontal: 10, 
    borderRadius: 15, 
    backgroundColor: '#1a1a1a', 
    overflow: 'hidden',
  },
  poster: { width: '100%', height: '80%', resizeMode: 'cover' },
  cardInfo: { padding: 10, backgroundColor: '#1a1a1a' },
  movieTitle: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  movieRating: { color: '#ffeb3b', fontSize: 13, marginTop: 4 }
});