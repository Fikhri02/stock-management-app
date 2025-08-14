import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

export default function CustomTopBar(
  { title }: { title: string },
  { navigation }: any
) {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 56 + insets.top,
      paddingTop: insets.top,
      paddingHorizontal: 16,
    },
    title: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.openDrawer()}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Icon name="notifications-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
