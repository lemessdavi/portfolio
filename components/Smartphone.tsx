import SmartphoneSVG from "@/assets/svg/SmartphoneSVG";
import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import Clock from "./Clock";
import AppGrid from "./AppGrid";
import FavoriteBar from "./FavoriteBar";

export default function Smartphone() {
  const showScreenAnim = useRef(new Animated.Value(0)).current;
  const [isPowerOn, setIsPowerOn] = useState(false);
  const translateY = useRef(new Animated.Value(-50)).current;

  const PHONE_WIDTH = 400;
  const PHONE_HEIGHT = 800;
  const ICON_SIZE = 40;
  const FAVORITE_ICON_SIZE = ICON_SIZE + 10;

  showScreenAnim.addListener(({ value }) => {
    if (value >= 0.1) {
      setIsPowerOn(true);
    } else {
      setIsPowerOn(false);
    }
  });

  const afterLoadAnimation = Animated.parallel([
    Animated.timing(showScreenAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }),
  ]);

  const styles = StyleSheet.create({
    container: {
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT,
      position: "relative",
    },
    appsContainer: {
      position: "absolute",
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT,
      padding: 30,
      paddingTop: 200,
      overflow: "hidden",
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <SmartphoneSVG
          PHONE_WIDTH={PHONE_WIDTH}
          PHONE_HEIGHT={PHONE_HEIGHT}
          afterLoadAnimation={afterLoadAnimation}
          isPowerOn={isPowerOn}
        />
      </View>
      <Animated.View
        style={[
          styles.appsContainer,
          { opacity: showScreenAnim },
          { transform: [{ translateY }] },
        ]}
      >
        <Clock />
        <AppGrid ICON_SIZE={ICON_SIZE} />
        <FavoriteBar ICON_SIZE={FAVORITE_ICON_SIZE} />
      </Animated.View>
    </View>
  );
}
