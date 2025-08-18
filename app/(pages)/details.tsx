import { DarkColors } from "@/styles/main-theme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "expo-router";
import React, { useLayoutEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const images = [
  "https://picsum.photos/id/5/5000/3334",
  "https://picsum.photos/id/7/4728/3168",
  "https://picsum.photos/id/28/4928/3264",
];

export default function DetailsScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // completely hides the header
    });
  }, [navigation]);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<"date" | "time">("date");
  const [text, setText] = useState("");

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(false); // hide picker after selection
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showPicker = (pickerMode: "date" | "time") => {
    setMode(pickerMode);
    setShow(true);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: DarkColors.background,
        marginVertical: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: DarkColors.background,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="exit-outline" size={24} color={DarkColors.primary} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: DarkColors.primary,
          }}
        >
          Details
        </Text>

        {/* Placeholder to balance layout */}
        <View style={{ width: 24 }} />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.timeDateBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => showPicker("date")}
          >
            <View style={styles.dateBox}>
              <Ionicons
                name="calendar-outline"
                size={15}
                color={DarkColors.primary}
                marginRight={5}
              />
              <Text style={styles.buttonText}>{formatReadableDate(date)}</Text>
              <Ionicons
                name="caret-down-circle-outline"
                size={15}
                marginLeft={5}
                color={DarkColors.primary}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => showPicker("time")}
          >
            <View style={styles.dateBox}>
              <Ionicons
                name="time-outline"
                size={15}
                color={DarkColors.primary}
                marginRight={5}
              />
              <Text style={styles.buttonText}>{formatReadableTime(date)}</Text>
              <Ionicons
                name="caret-down-circle-outline"
                size={15}
                marginLeft={5}
                color={DarkColors.primary}
              />
            </View>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              is24Hour={true}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onChange}
            />
          )}
        </View>
        {/* Image Carousel */}
        <Carousel
          loop
          width={width}
          height={250}
          autoPlay={false}
          data={images}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
          style={styles.carouselBox}
        />
        <TouchableOpacity>
          <View style={styles.addImageBox}>
            <Text style={styles.buttonText}>Add Image</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.iconsBox}>
          <View style={{ flex: 7, flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="emoticon-happy"
              size={30}
              color="yellow"
              paddingHorizontal={5}
            />
            <MaterialCommunityIcons
              name="emoticon-sad"
              size={30}
              color="lightblue"
              paddingHorizontal={5}
            />
            <MaterialCommunityIcons
              name="emoticon-angry"
              size={30}
              color="red"
              paddingHorizontal={5}
            />
          </View>
          <TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Ionicons
                name="add-circle-outline"
                size={30}
                color={DarkColors.primary}
                marginRight={5}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Details Section */}
        <View style={styles.detailsBox}>
          <Text style={styles.title}>Cafe Mocha</Text>
          <Text style={styles.subtitle}>Best cozy spot in town ☕</Text>
          {/* <Text style={styles.description}>
            Welcome to Cafe Mocha, where we serve freshly brewed coffee with
            love. Our specialty is the double chocolate mocha latte. Perfect
            place to chill, work, or hang out with friends!
          </Text> */}
          <View style={styles.descriptionBox}>
            <TextInput
              style={styles.textInput}
              placeholder="Type something..."
              placeholderTextColor={DarkColors.primary}
              value={text}
              onChangeText={setText}
            />
          </View>
          {/* <MoneyTrackingList></MoneyTrackingList> */}
        </View>
      </ScrollView>
    </View>
  );
  {
    /* make a box for view container
        date and time picker 
        1. mood
        2. notes
        3. pictures
        */
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkColors.background,
  },
  image: {
    width: width,
    height: 250,
    resizeMode: "cover",
  },
  detailsBox: {
    padding: 16,
    backgroundColor: DarkColors.secondary,
    margin: 10,
    borderRadius: 5,
  },

  addImageBox: {
    flexDirection: "row",
    backgroundColor: DarkColors.secondary,
    alignItems: "center",
    padding: 16,
    borderRadius: 5,
    margin: 10,
  },
  iconsBox: {
    padding: 16,
    flexDirection: "row",
    backgroundColor: DarkColors.secondary,
    margin: 10,
    borderRadius: 5,
    width: "100%",
    justifyContent: "space-between", // push them to left & right edges
  },

  button: {
    backgroundColor: DarkColors.background,
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    // textDecorationLine: "underline",
    color: DarkColors.primary,
    fontSize: 14,
    fontWeight: "bold",
  },
  dateBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 5,
    backgroundColor: DarkColors.background,
  },
  timeDateBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 5,
    backgroundColor: DarkColors.background,
  },

  carouselBox: {
    padding: 16,
    backgroundColor: DarkColors.secondary,
    margin: 3,
    borderRadius: 3,
  },
  input: {
    height: 50,
    width: "80%",
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    color: DarkColors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: DarkColors.subtitle,
    marginBottom: 12,
  },
  descriptionBox: {
    // padding: 3,
    justifyContent: "flex-start", // 👈 aligns children at the top
    alignItems: "flex-start",
    flexDirection: "column",
    paddingVertical: 40,
    backgroundColor: DarkColors.red,
    margin: 0,
    borderRadius: 5,
  },
  textInput: {
    fontSize: 20,
    lineHeight: 20,
    backgroundColor: DarkColors.primary,
    // textDecorationColor: DarkColors.text,
    color: DarkColors.text,
  },
});

const formatReadableDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const formatReadableTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
};
