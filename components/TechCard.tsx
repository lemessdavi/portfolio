import ReactNativeIcon from "@/assets/svg/ReactNativeIcon";
import { Text, View } from "./Themed";
import { Animated, Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { useRef } from "react";

interface TechCardProps {
  icon: React.JSX.Element;
  title: string;
  subtitle: string;
  style?: StyleProp<ViewStyle>;
}

export default function TechCard(techCardProps: TechCardProps) {
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
      duration: 2500,
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
      <Animated.View style={[styles.techCard, techCardProps.style, { transform: [{ scale }] }]}>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <View style={styles.icon}>{techCardProps.icon}</View>
        </Animated.View>
        <View style={styles.text}>
          <Text style={styles.title}>{techCardProps.title}</Text>
          <Text style={styles.subtitle}>{techCardProps.subtitle}</Text>
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
