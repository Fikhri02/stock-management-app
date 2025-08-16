import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

// const DATA = [
//   { id: '1', name: 'Latte' },
//   { id: '2', name: 'Cappuccino' },
//   { id: '3', name: 'Espresso' },
//   { id: '4', name: 'Mocha' },
//   { id: '5', name: 'Macchiato' },
// ];

export function HomeSearchBar() {
  const [query, setQuery] = useState('');
  
//   const filteredData = DATA.filter(item =>
//     item.name.toLowerCase().includes(query.toLowerCase())
//   );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
      />

      {/* Filtered List */}
      {/* <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    height: 70,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
