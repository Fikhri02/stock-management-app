import { FlatList, StyleSheet, Text, View } from "react-native";

export default function MoneyTrackingList(){
    const transactions = [
        { id: "1", title: "Coffee at Starbucks", amount: -5.5 },
        { id: "2", title: "Salary Payment", amount: 2000 },
        { id: "3", title: "Groceries", amount: -75.2 },
        { id: "4", title: "Electric Bill", amount: -120 },
        { id: "5", title: "Dinner Out", amount: -40.75 },
        { id: "6", title: "Freelance Project", amount: 500 },
      ];
      
    return      <FlatList
    data={transactions}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.transaction}>
        <Text style={styles.transactionTitle}>{item.title}</Text>
        <Text
          style={[
            styles.transactionAmount,
            { color: item.amount < 0 ? "red" : "green" },
          ]}
        >
          {item.amount < 0 ? "-" : "+"}${Math.abs(item.amount)}
        </Text>
      </View>
    )}
    style={{ marginTop: 20 }}
    scrollEnabled={false}
  />;
}      

const styles = StyleSheet.create({
    transactionAmount: {
      fontSize: 16,
      fontWeight: "bold",
    },
    transactionTitle: {
      fontSize: 14,
      color: "gray",
    },
    transaction: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
})
      

      
 