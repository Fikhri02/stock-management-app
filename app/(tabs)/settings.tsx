import React, { useCallback, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";

export default function Settings() {
  const [data, setData] = useState(["Apple", "Banana", "Cherry"]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // Simulate fetching new data
    setTimeout(() => {
      setData((prev) => [...prev, `Fruit ${prev.length + 1}`]);
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#2196F3"]}
            tintColor="#2196F3"
            title="Pull to refresh"
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#2196F3",
    color: "white",
  },
  itemText: { color: "white", fontSize: 16, textAlign: "center" },
});
