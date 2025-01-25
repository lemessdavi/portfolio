import App from "@/components/App";
import LinkedinIcon from "@/assets/svg/LinkedinIcon";
import SmartphoneSVG from "@/assets/svg/SmartphoneSVG";
import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import GmailIcon from "@/assets/svg/GmailIcon";
import WhatsappIcon from "@/assets/svg/Whatsapp";
import GithubIcon from "@/assets/svg/GithubIcon";
import DailyDevIcon from "@/assets/svg/DailyDevIcon";
import ExpoIcon from "@/assets/svg/ExpoIcon";
import AppleIcon from "@/assets/svg/AppleIcon";
import FavoriteApp from "./FavoriteApp";
import { format } from "date-fns";

export default function Smartphone() {
  const showScreenAnim = useRef(new Animated.Value(0)).current;

  const [isPowerOn, setIsPowerOn] = useState(false);

  const [currentTime, setCurrentTime] = useState("12:00");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(format(new Date(), "HH:mm"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  showScreenAnim.addListener(({ value }) => {
    if (value >= 0.1) {
      setIsPowerOn(true);
    } else {
      setIsPowerOn(false);
    }
  });

  const translateY = useRef(new Animated.Value(-50)).current;

  const PHONE_WIDTH = 400;
  const PHONE_HEIGHT = 800;
  const ICON_SIZE = 40;
  const FAVORITE_ICON_SIZE = ICON_SIZE + 10;

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
    appRow: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: 30,
    },
    bottomBar: {
      position: "absolute",
      bottom: 40,
      left: 0,
      right: 0,
      height: 80,
      backgroundColor: "rgba(255,255,255,0.1)",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      marginHorizontal: 24,
      borderRadius: 25,
      paddingHorizontal: 20,
    },
    clockContainer: {
      position: "absolute",
      top: 80,
      alignItems: "center",
      width: "85%",
      zIndex: 2,
    },
    clockText: {
      fontSize: 68,
      fontFamily: "SpaceMono",
      color: "#fff",
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
        <>
          <View style={styles.clockContainer}>
            <Text style={styles.clockText}>{currentTime}</Text>
          </View>
        </>

        <View style={styles.appRow}>
          <App
            icon={<DailyDevIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="daily.dev"
            iconSize={ICON_SIZE}
          />
          <App
            icon={<ExpoIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Project"
            iconSize={ICON_SIZE}
          />
          <App
            icon={<AppleIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Something"
            iconSize={ICON_SIZE}
          />
          <App
            icon={
              <AppleIcon fill={"#fff"} width={ICON_SIZE} height={ICON_SIZE} />
            }
            title="Something"
            iconSize={ICON_SIZE}
          />
        </View>

        <View style={styles.bottomBar}>
          <FavoriteApp
            icon={
              <LinkedinIcon
                width={FAVORITE_ICON_SIZE}
                height={FAVORITE_ICON_SIZE}
              />
            }
            title="Linkedin"
            iconSize={FAVORITE_ICON_SIZE}
          />
          <FavoriteApp
            icon={
              <GmailIcon
                width={FAVORITE_ICON_SIZE}
                height={FAVORITE_ICON_SIZE}
              />
            }
            title="Gmail"
            iconSize={FAVORITE_ICON_SIZE}
          />
          <FavoriteApp
            icon={
              <WhatsappIcon
                width={FAVORITE_ICON_SIZE}
                height={FAVORITE_ICON_SIZE}
              />
            }
            title="Whatsapp"
            iconSize={FAVORITE_ICON_SIZE}
          />
          <FavoriteApp
            icon={
              <GithubIcon
                width={FAVORITE_ICON_SIZE}
                height={FAVORITE_ICON_SIZE}
              />
            }
            title="Github"
            iconSize={FAVORITE_ICON_SIZE}
          />
        </View>
      </Animated.View>
    </View>
  );
}
