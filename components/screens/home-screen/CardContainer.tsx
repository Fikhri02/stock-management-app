import { useRouter } from "expo-router";
import React, { ReactNode } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CardContainerProps {
  imageUrl?: string;     // optional image URL
  title?: string;        // optional title
  children?: ReactNode;  // content inside card
}

export default function CardContainer({ imageUrl, title, children }: CardContainerProps) {
    const router = useRouter();


  return (
    <TouchableOpacity
    onPress={() => router.push("/(pages)/details")}
    style={{ padding: 20, backgroundColor: "black", margin: 10 }}
  >
      <View style={styles.card}>
      {/* Image Box */}
      <View style={styles.imageBox}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={{ color: "#aaa" }}>No Image</Text>
          </View>
        )}
      </View>

      {/* Title */}
      {title && <Text style={styles.title}>{title}</Text>}

      {/* Content */}
      <View style={styles.content}>{children}</View>
      <View style={styles.content}><Text style={styles.contentText}>A day to remember</Text></View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  imageBox: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden", // makes image corners rounded
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentText: {
    marginBottom: 8,
    textAlign: "center",
  },
});
