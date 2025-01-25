import { Animated, Pressable, StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import { useRef } from "react";

export interface AppProps {
  icon: React.JSX.Element;
  title: string;
  iconSize: number;
}

export default function App({ icon, title, iconSize }: AppProps) {
  const scaleIcon = useRef(new Animated.Value(1)).current;
  const scaleText = useRef(new Animated.Value(1)).current;

  const handleHoverIn = () => {
    Animated.spring(scaleIcon, {
      toValue: 1.3,
      useNativeDriver: true,
    }).start();

    Animated.spring(scaleText, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const handleHoverOut = () => {
    Animated.spring(scaleIcon, {
      toValue: 1,
      speed: 0.2,
      useNativeDriver: true,
    }).start();

    Animated.spring(scaleText, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: 60,
      maxHeight: 100,
    },
    icon: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: 20,
      width: iconSize + 20,
      height: iconSize + 20,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
    title: {
      fontSize: 12,
      marginTop: 8,
      alignSelf: "center",
    },
  });

  return (
    <Pressable onHoverIn={handleHoverIn} onHoverOut={handleHoverOut}>
      <View style={styles.container}>
        <Animated.View style={[{ transform: [{ scale: scaleIcon }] }]}>
          <View style={styles.icon}>{icon}</View>
        </Animated.View>
        <Animated.View style={[{ transform: [{ scale: scaleText }] }]}>
          <Text style={styles.title}>{title}</Text>
        </Animated.View>
      </View>
    </Pressable>
  );
}
