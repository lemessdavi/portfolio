import React from "react";
import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import Svg, { Rect } from "react-native-svg";
import AppleIcon from "./AppleIcon";
import { Text, View } from "@/components/Themed";

interface SmartphoneSVGProps {
  PHONE_WIDTH: number;
  PHONE_HEIGHT: number;
  afterLoadAnimation?: Animated.CompositeAnimation;
}

export default function SmartphoneSVG({ PHONE_WIDTH, PHONE_HEIGHT, afterLoadAnimation }: SmartphoneSVGProps) {
  const [loading, setLoading] = useState(true);
  const loadingAnim = useRef(new Animated.Value(0)).current;
  const helloAnim = useRef(new Animated.Value(0)).current;

  const borderMarginWidth = PHONE_WIDTH * 0.0333;
  const borderMarginHeight = PHONE_HEIGHT * 0.0167;
  const borderWidth = PHONE_WIDTH - 2 * borderMarginWidth;
  const borderHeight = PHONE_HEIGHT - 2 * borderMarginHeight;
  const borderRadius = PHONE_WIDTH * 0.1333;

  const screenMarginWidth = PHONE_WIDTH * 0.1;
  const screenMarginHeight = PHONE_HEIGHT * 0.1;
  const screenWidth = PHONE_WIDTH - 2 * screenMarginWidth;
  const screenHeight = PHONE_HEIGHT - 2 * screenMarginHeight;
  const screenBorderRadius = PHONE_WIDTH * 0.0667;



  const styles = StyleSheet.create({
    container:{
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT,
      backgroundColor: "transparent",
    },
    loadingContainer: {
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT,
      zIndex: 1,
    },
  });

  useEffect(() => {
    Animated.sequence([
      Animated.timing(loadingAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
      Animated.timing(loadingAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(helloAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
      Animated.timing(helloAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
      afterLoadAnimation || Animated.timing(new Animated.Value(0), { toValue: 0, duration: 0, useNativeDriver: true }),
    ]).start();

    
  }, [loadingAnim, helloAnim]);

  return (
    <View style={styles.container}>
        <>
          <Animated.View style={[styles.loadingContainer, { opacity: loadingAnim }]}>
            <AppleIcon fill={"#fff"} width={100} height={100} />
          </Animated.View>
          <Animated.View style={[styles.loadingContainer, { opacity: helloAnim }]}>
            <Text style={{ fontSize: 40, fontWeight: "bold", color: "#fff" }}>Hello</Text>
          </Animated.View>
        </>
     
        <Svg width={PHONE_WIDTH} height={PHONE_HEIGHT}>
          {/* Smartphone Border */}
          <Rect
            x={borderMarginWidth}
            y={borderMarginHeight}
            width={borderWidth}
            height={borderHeight}
            rx={borderRadius}
            ry={borderRadius}
            fill="#000"
            stroke="#333"
            strokeWidth={2}
          />
          {/* Screen */}
          <Rect
            x={screenMarginWidth}
            y={screenMarginHeight}
            width={screenWidth}
            height={screenHeight}
            rx={screenBorderRadius}
            ry={screenBorderRadius}
            fill="transparent"
          />
        </Svg>

      ;
    </View>
  );
}
