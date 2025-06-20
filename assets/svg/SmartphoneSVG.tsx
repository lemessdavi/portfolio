import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
import AppleIcon from "./AppleIcon";
import { Text, View } from "@/components/Themed";

interface SmartphoneSVGProps {
  PHONE_WIDTH: number;
  PHONE_HEIGHT: number;
  afterLoadAnimation?: Animated.CompositeAnimation;
  isPowerOn: boolean;
  backgroundColor?: string;
}

export default function SmartphoneSVG({
  PHONE_WIDTH,
  PHONE_HEIGHT,
  afterLoadAnimation,
  isPowerOn,
  backgroundColor,
}: SmartphoneSVGProps) {
  const loadingAnim = useRef(new Animated.Value(0)).current;
  const helloAnim = useRef(new Animated.Value(0)).current;

  const borderMarginWidth = PHONE_WIDTH * 0.0333;
  const borderMarginHeight = PHONE_HEIGHT * 0.0167;
  const borderWidth = PHONE_WIDTH - 2 * borderMarginWidth;
  const borderHeight = PHONE_HEIGHT - 2 * borderMarginHeight;
  const borderRadius = PHONE_WIDTH * 0.1333;
  const strokeWidth = 2;

  const styles = StyleSheet.create({
    container: {
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
    border: {
      position: "absolute",
      width: borderWidth,
      height: borderHeight,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
  });

  useEffect(() => {
    if (!isPowerOn) {
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
        afterLoadAnimation ||
          Animated.timing(new Animated.Value(0), {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
      ]).start();
    }
  }, [loadingAnim, helloAnim, afterLoadAnimation, isPowerOn]);

  const notchWidth = borderWidth * 0.3;
  const notchHeight = borderHeight * 0.05;
  const notchX = (PHONE_WIDTH - notchWidth) / 2;
  const notchY = borderMarginHeight;

  const backgroundX = borderMarginWidth + strokeWidth;
  const backgroundY = borderMarginHeight + strokeWidth;
  const backgroundWidth = borderWidth - 2 * strokeWidth;
  const backgroundHeight = borderHeight - 2 * strokeWidth;
  const backgroundRadius = borderRadius - strokeWidth; // Adjust radius to fit inside the border

  return (
    <View style={styles.container}>
      <>
        <Animated.View
          style={[styles.loadingContainer, { opacity: loadingAnim }]}
        >
          <AppleIcon fill={"#fff"} width={100} height={100} />
        </Animated.View>
        <Animated.View
          style={[styles.loadingContainer, { opacity: helloAnim }]}
        >
          <Text style={{ fontSize: 40, fontWeight: "bold", color: "#fff" }}>
            Hello
          </Text>
        </Animated.View>
      </>

      <Svg width={PHONE_WIDTH} height={PHONE_HEIGHT}>
        <Defs>
          <LinearGradient
            id="borderGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <Stop offset="0%" stopColor="#444444" stopOpacity="1" />
            <Stop offset="50%" stopColor="#666666" stopOpacity="1" />
            <Stop offset="100%" stopColor="#444444" stopOpacity="1" />
          </LinearGradient>

          <LinearGradient id="phoneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#4c669f" stopOpacity="1" />
            <Stop offset="100%" stopColor="#7c983b" stopOpacity="1" />
          </LinearGradient>
        </Defs>

        <Rect
          x={borderMarginWidth - 2}
          y={borderMarginHeight - 2}
          width={borderWidth + 4}
          height={borderHeight + 4}
          rx={borderRadius + 2}
          ry={borderRadius + 2}
          fill="url(#borderGradient)"
        />

        <Rect
          x={backgroundX}
          y={backgroundY}
          width={backgroundWidth}
          height={backgroundHeight}
          rx={backgroundRadius}
          ry={backgroundRadius}
          fill={isPowerOn ? "url(#phoneGradient)" : "#000"}
        />

        {/* Inner Border Shine */}
        <Rect
          x={borderMarginWidth}
          y={borderMarginHeight}
          width={borderWidth}
          height={borderHeight}
          rx={borderRadius}
          ry={borderRadius}
          fill={backgroundColor || "transparent"}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={1}
        />

        {/* Volume Buttons (Left Side) */}
        <Rect
          x={borderMarginWidth - 3}
          y={borderMarginHeight + borderHeight * 0.2}
          width={4}
          height={40}
          rx={2}
          ry={2}
          fill="#333"
        />
        <Rect
          x={borderMarginWidth - 3}
          y={borderMarginHeight + borderHeight * 0.35}
          width={4}
          height={40}
          rx={2}
          ry={2}
          fill="#333"
        />

        {/* Power Button (Right Side) */}
        <Rect
          x={PHONE_WIDTH - borderMarginWidth - 1}
          y={borderMarginHeight + borderHeight * 0.2}
          width={4}
          height={50}
          rx={2}
          ry={2}
          fill="#333"
        />
      </Svg>
    </View>
  );
}
