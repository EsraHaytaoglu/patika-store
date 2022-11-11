import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import ProductCard from './components/ProductCard';
import SearchArea from './components/SearchArea';
import products_data from './products_data.json';

function App() {
  const renderProducts = ({item}) => <ProductCard product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATİKA STORE</Text>
      <SearchArea />
      <FlatList
        data={products_data}
        renderItem={renderProducts}
        numColumns="2"
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'purple',
    margin: 10,
  },
});
export default App;
