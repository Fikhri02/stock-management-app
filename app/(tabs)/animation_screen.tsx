import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CommonStyles } from "../../styles/main-theme";


export default function AnimationScreen(){

    const bounceValue = useRef(new Animated.Value(1)).current;

    const startBounce = () => {
      Animated.sequence([
        Animated.spring(bounceValue, {
          toValue: 1.3,
          friction: 3,
          useNativeDriver: true,
        }),
        Animated.spring(bounceValue, {
          toValue: 1,
          friction: 3,
          useNativeDriver: true,
        }),
      ]).start();
    };
  
    useEffect(() => {
      // make it bounce on mount
      startBounce();
    }, []);
  

    return(
        <View style={styles.container}>
            <Text style={CommonStyles.title}>Animation Screen</Text>
            
        <Animated.View style={{ transform: [{ scale: bounceValue }] }}>
          <TouchableOpacity style={styles.button} onPress={startBounce}>
            <Text style={styles.text}>Bounce Me 🎉</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f9ff',
    },
    button: {
      backgroundColor: '#4a90e2',
      paddingVertical: 14,
      paddingHorizontal: 30,
      borderRadius: 30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
  });
  
