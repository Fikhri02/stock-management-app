import CardContainer from "@/components/screens/home-screen/CardContainer";
import DailyMoneyTracker from "@/components/screens/home-screen/DailyMoneyTracker";
import MonthPicker from "@/components/screens/home-screen/MonthPicker";
import { DarkColors } from "@/styles/main-theme";
import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen({ navigation }: any) {
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
      <View style={styles.monthPickerBox}>
        <MonthPicker></MonthPicker>
      </View>
      <ScrollView>
        {/* <Text style={CommonStyles.title}>How is your day?</Text> */}
        <DailyMoneyTracker></DailyMoneyTracker>
        {/* <SearchBar placeholder="find anything..."   containerStyle={{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0,}} platform="android"
  inputContainerStyle={{ backgroundColor: '#eee' }}></SearchBar> */}
        {/* <HomeSearchBar></HomeSearchBar> */}
        <CardContainer title="Card Title"></CardContainer>
        <CardContainer title="Card Title"></CardContainer>
        <CardContainer title="Card Title"></CardContainer>
        <CardContainer title="Card Title"></CardContainer>
        {/* <FlatList
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
      /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: DarkColors.background,
    width: "100%",
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#2196F3",
    color: DarkColors.primary,
  },
  itemText: { color: "white", fontSize: 16, textAlign: "center" },
  monthPickerBox: { width: "50%", color: "white", paddingVertical: 10 },
});
