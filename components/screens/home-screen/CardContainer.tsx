import { DarkColors } from "@/styles/main-theme";
import { useRouter } from "expo-router";
import React, { ReactNode } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CardContainerProps {
  imageUrl?: string; // optional image URL
  title?: string; // optional title
  children?: ReactNode; // content inside card
}

export default function CardContainer({
  imageUrl,
  title,
  children,
}: CardContainerProps) {
  const router = useRouter();

  imageUrl = imageUrl || "https://picsum.photos/id/28/4928/3264";

  return (
    <TouchableOpacity
      onPress={() => router.push("/(pages)/details")}
      style={{
        padding: 30,
        // backgroundColor: "white",
        margin: 10,
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderTitle}>Header</Text>
        </View>
        {/* Title */}
        {title && <Text style={styles.title}>{title}</Text>}
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
        {/* Content */}
        {/* <View style={styles.content}>{children}</View> */}
        <View style={styles.content}>
          <Text style={styles.contentText}>A day to remember</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: DarkColors.secondary,
    paddingBottom: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
  },
  cardHeader: {
    backgroundColor: DarkColors.primary,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 7,
  },
  cardHeaderTitle: {
    color: DarkColors.text,
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
    color: DarkColors.primary,
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
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: DarkColors.primary,
  },
  contentText: {
    marginBottom: 8,
    textAlign: "center",
    color: DarkColors.primary,
  },
});
