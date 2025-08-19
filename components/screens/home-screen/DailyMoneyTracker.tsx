import { DarkColors } from "@/styles/main-theme";
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
        width={5}
        fill={fill}
        tintColor={DarkColors.primary}
        backgroundColor={DarkColors.secondary}
        rotation={0} // start from top
        lineCap="square"
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
    margin: 10,
  },
  innerCircle: {
    width: 190, // slightly smaller than outer size (200)
    height: 190,
    borderRadius: 80, // half of width/height → makes it a circle
    backgroundColor: DarkColors.secondary, // 👈 set your desired color
    alignItems: "center",
    justifyContent: "center",
  },
  amount: {
    fontSize: 28,
    fontWeight: "bold",
    color: DarkColors.primary,
  },
  label: {
    fontSize: 16,
    color: DarkColors.primary,
    marginTop: 4,
  },
});
