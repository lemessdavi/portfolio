import React, { useState } from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const AnimatedView = Animated.createAnimatedComponent(View);

type DigitalCardProps = {
  onPress?: VoidFunction;
};

export default function DigitalCard({ onPress }: DigitalCardProps) {
  const rotationX = useSharedValue(0);
  const rotationY = useSharedValue(0);
  const scale = useSharedValue(1);
  const sheenX = useSharedValue(0);
  const sheenY = useSharedValue(0);
  const sheenSize = 10;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = (x / width - 0.5) * 2;
    const yPercent = (y / height - 0.5) * 2;

    rotationY.value = withSpring(xPercent * 10, {
      stiffness: 300,
      damping: 20,
    });
    rotationX.value = withSpring(-yPercent * 10, {
      stiffness: 300,
      damping: 20,
    });

    sheenX.value = withSpring(x - sheenSize / 2, {
      stiffness: 300,
      damping: 20,
    });
    sheenY.value = withSpring(y - sheenSize / 2, {
      stiffness: 300,
      damping: 20,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.value = withSpring(1.07, { stiffness: 300, damping: 20 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    scale.value = withSpring(1, { stiffness: 300, damping: 20 });
    rotationX.value = withSpring(0, { stiffness: 300, damping: 20 });
    rotationY.value = withSpring(0, { stiffness: 300, damping: 20 });
    sheenX.value = withSpring(0, { stiffness: 300, damping: 20 });
    sheenY.value = withSpring(0, { stiffness: 300, damping: 20 });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateX: `${rotationX.value}deg` },
      { rotateY: `${rotationY.value}deg` },
      { scale: scale.value },
    ],
  }));

  const sheenStyle = useAnimatedStyle(() => ({
    position: "absolute",
    width: sheenSize,
    height: sheenSize,
    borderRadius: sheenSize / 2,
    opacity: isHovered ? 0.3 : 0,
    top: sheenY.value,
    left: sheenX.value,
  }));

  return (
    <Pressable onPress={onPress}>
      <AnimatedView
        style={[styles.card, animatedStyle]}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          source={require("@/assets/images/card.png")}
          style={styles.image}
          pointerEvents="none"
        />
        <AnimatedView style={sheenStyle} pointerEvents="none">
          <LinearGradient
            colors={["rgba(255,255,255,0.3)", "rgba(255,255,255,0)"]}
            style={{ flex: 1, borderRadius: sheenSize / 2 }}
          />
        </AnimatedView>
      </AnimatedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    borderRadius: 8,
    width: 450,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    resizeMode: "contain",
  },
});
