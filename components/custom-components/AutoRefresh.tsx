import React, { useCallback, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";

export default function AutoRefresh() {
  const [refreshing, setRefreshing] = useState(false);
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // Simulate API call
    setTimeout(() => {
      setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <FlatList
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#2196F3"]} // Android spinner color
          tintColor="#2196F3" // iOS spinner color
          title="Pull to refresh" // iOS text
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
