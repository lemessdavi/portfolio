import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { View } from "./Themed";
import { useRef } from "react";

export interface BaseAppProps {
  icon: React.JSX.Element;
  iconSize: number;
  children?: React.ReactNode;
  onPress?: VoidFunction;
  iconStyle?: StyleProp<ViewStyle>;
}

export default function BaseApp({
  icon,
  iconSize,
  children,
  onPress,
  iconStyle,
}: BaseAppProps) {
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
      backgroundColor: "transparent",
      borderRadius: 20,
      width: iconSize + 20,
      height: iconSize + 20,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
  });

  return (
    <Pressable
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Animated.View style={[{ transform: [{ scale: scaleIcon }] }]}>
          <View style={[styles.icon, iconStyle]}>{icon}</View>
        </Animated.View>
        <Animated.View style={[{ transform: [{ scale: scaleText }] }]}>
          {children}
        </Animated.View>
      </View>
    </Pressable>
  );
}
