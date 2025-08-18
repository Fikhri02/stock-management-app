import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function SpendingTracker() {
  const totalBudget = 1000;
  const totalSpent = 450;
  const fill = (totalSpent / totalBudget) * 100; // percentage

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={200}
        width={15}
        fill={fill}
        tintColor="green"
        backgroundColor="#fff"
        rotation={0} // start from top
        lineCap="round"
      >
        {() => (
          <View style={styles.innerCircle}>
            <Text style={styles.amount}>RM {totalSpent}</Text>
            <Text style={styles.label}>Spent</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  innerCircle: {
    justifyContent: "center",
    alignItems: "center",
  },
  amount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginTop: 4,
  },
});
