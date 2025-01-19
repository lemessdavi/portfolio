import { Animated, Pressable, StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import { useRef } from "react";

export interface AppProps {
  icon: React.JSX.Element;
  title: string;
}

export default function App({ icon, title }: AppProps) {
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 1,
    maxHeight: 100,
  },
  icon: {
    backgroundColor: "transparent",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  title: {
    fontSize: 14,
    marginTop: 10,
    alignSelf: "center",
  },
});
