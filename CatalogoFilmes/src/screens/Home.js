import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import mockData from '../services/api';
import MovieCard from '../components/MovieCard';

export default function Home({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMovies(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#E50914" style={{flex:1}} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        numColumns={2} // Dois filmes por linha
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard 
            movie={item} 
            onPress={() => navigation.navigate('Details', { movie: item })} 
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  list: { padding: 10 }
});