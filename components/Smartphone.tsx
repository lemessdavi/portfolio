import SmartphoneSVG from "@/assets/svg/SmartphoneSVG";
import React, { useRef, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Clock from "./Clock";
import AppGrid from "./AppGrid";
import FavoriteBar from "./FavoriteBar";
import Blog from "./Blog";

export default function Smartphone() {
  const showScreenAnim = useRef(new Animated.Value(0)).current;
  const [isPowerOn, setIsPowerOn] = useState(false);
  const translateY = useRef(new Animated.Value(-50)).current;
  const [showBlog, setShowBlog] = useState(false);
  const contentFade = useRef(new Animated.Value(1)).current;

  const PHONE_WIDTH = 400;
  const PHONE_HEIGHT = 800;
  const ICON_SIZE = 40;
  const FAVORITE_ICON_SIZE = ICON_SIZE + 10;

  const handleShowBlog = () => {
    Animated.timing(contentFade, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowBlog(true);
      Animated.timing(contentFade, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleCloseBlog = () => {
    Animated.timing(contentFade, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowBlog(false);
      Animated.timing(contentFade, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

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
      alignItems: "center",
    },
    appsContainer: {
      position: "absolute",
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT,
      padding: 30,
      paddingTop: 100,
      overflow: "hidden",
    },
    blogContainer: {
      position: "absolute",
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT,
      padding: 30,
      paddingTop: 50,
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
          backgroundColor={showBlog ? "#222326" : "transparent"}
        />
      </View>
      <Animated.View
        style={[
          showBlog ? styles.blogContainer : styles.appsContainer,
          { opacity: showScreenAnim },
          { transform: [{ translateY }] },
        ]}
      >
        <Animated.View style={{ opacity: contentFade, flex: 1 }}>
          {showBlog ? (
            <Blog onClose={handleCloseBlog} />
          ) : (
            <>
              <Clock />
              <AppGrid ICON_SIZE={ICON_SIZE} onBlogPress={handleShowBlog} />
              <FavoriteBar ICON_SIZE={FAVORITE_ICON_SIZE} />
            </>
          )}
        </Animated.View>
      </Animated.View>
    </View>
  );
}
