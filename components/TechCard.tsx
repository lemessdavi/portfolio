import { Text, View } from "./Themed";
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRef } from "react";

interface TechCardProps {
  icon: React.JSX.Element;
  title: string;
  subtitle: string;
  style?: StyleProp<ViewStyle>;
  gradientColors?: string[];
}

export default function TechCard({
  icon,
  title,
  subtitle,
  style,
  gradientColors = ["rgba(0, 216, 255, 0.15)", "rgba(0, 216, 255, 0.05)"],
}: TechCardProps) {
  const scale = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const handleHoverIn = () => {
    //Card
    Animated.spring(scale, {
      toValue: 1.05,
      useNativeDriver: true,
    }).start();

    //Icon
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleHoverOut = () => {
    //Card
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();

    //Icon
    Animated.timing(rotateAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Pressable onHoverIn={handleHoverIn} onHoverOut={handleHoverOut}>
      <Animated.View
        style={[styles.techCard, style, { transform: [{ scale }] }]}
      >
        <LinearGradient
          colors={
            gradientColors.length === 2
              ? (gradientColors as [string, string])
              : ["rgba(0, 216, 255, 0.15)", "rgba(0, 216, 255, 0.05)"]
          }
          style={styles.gradient}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
        />
        <Animated.View style={{ transform: [{ rotate }] }}>
          <View style={styles.icon}>{icon}</View>
        </Animated.View>
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  techCard: {
    width: 300,
    borderRadius: 10,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    overflow: "hidden",
    padding: 10,
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  icon: {
    backgroundColor: "transparent",
    margin: 10,
  },

  text: {
    backgroundColor: "transparent",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 10,
  },

  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    fontFamily: "Excalifont",
  },

  subtitle: {
    fontSize: 14,
    fontFamily: "Excalifont",
  },
});
