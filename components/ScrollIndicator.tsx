import { Animated, StyleSheet, View } from "react-native";
import { useRef, useEffect } from "react";

export default function ScrollIndicator() {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 20,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      bottom: 40,
      alignSelf: "center",
    },
    arrow: {
      width: 40,
      height: 40,
      borderBottomWidth: 4,
      borderRightWidth: 4,
      borderColor: "#fff",
      transform: [{ rotate: "45deg" }],
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.arrow,
          {
            transform: [{ rotate: "45deg" }, { translateY: bounceAnim }],
          },
        ]}
      />
    </View>
  );
}
