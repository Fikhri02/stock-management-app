import { Stack } from "expo-router";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const images = [
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1019/600/400",
];

export default function DetailsScreen() {
  return (
      <ScrollView style={styles.container}>
        <Stack.Screen options={{ title: "Cafe Details" }} />
      {/* Image Carousel */}
      <Carousel
        loop
        width={width}
        height={250}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />

      {/* Details Section */}
      <View style={styles.detailsBox}>
        <Text style={styles.title}>Cafe Mocha</Text>
        <Text style={styles.subtitle}>Best cozy spot in town ☕</Text>
        <Text style={styles.description}>
          Welcome to Cafe Mocha, where we serve freshly brewed coffee with love.
          Our specialty is the double chocolate mocha latte. Perfect place to
          chill, work, or hang out with friends!
        </Text>

        {/* make a box for view container 
        1. mood
        2. notes
        3. pictures
        */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: width,
    height: 250,
    resizeMode: "cover",
  },
  detailsBox: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
});
