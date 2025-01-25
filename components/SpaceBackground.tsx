import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

export default function SpaceBackground() {
  const stars = Array(100).fill(0);
  const fadeValues = useRef(
    stars.map(() => new Animated.Value(Math.random())),
  ).current;

  useEffect(() => {
    const animations = fadeValues.map((fadeValue) => {
      return Animated.sequence([
        Animated.timing(fadeValue, {
          toValue: Math.random(),
          duration: 1000 + Math.random() * 2000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]);
    });

    Animated.loop(Animated.parallel(animations)).start();
  }, []);

  return (
    <View style={styles.container}>
      {stars.map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.star,
            {
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: fadeValues[index],
              transform: [{ scale: fadeValues[index] }],
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  star: {
    position: "absolute",
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: "#fff",
  },
});
