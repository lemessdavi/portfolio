import App from "@/components/App";
import LinkedinIcon from "@/assets/svg/LinkedinIcon";
import SmartphoneSVG from "@/assets/svg/SmartphoneSVG";
import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import GmailIcon from "@/assets/svg/GmailIcon";
import WhatsappIcon from "@/assets/svg/Whatsapp";
import GithubIcon from "@/assets/svg/GithubIcon";
import DailyDevIcon from "@/assets/svg/DailyDevIcon";
import ExpoIcon from "@/assets/svg/ExpoIcon";
import BirdIcon from "@/assets/svg/Bird";
import AppleIcon from "@/assets/svg/AppleIcon";

export default function Smartphone() {
  const showScreenAnim = useRef(new Animated.Value(0)).current;

  const [isPowerOn, setIsPowerOn] = useState(false);

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
      paddingTop: 100,
      overflow: "hidden",
    },
    appRow: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: 30,
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
        <View style={styles.appRow}>
          <App
            icon={<LinkedinIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Linkedin"
            iconSize={ICON_SIZE}
          />
          <App
            icon={<GmailIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Gmail"
            iconSize={ICON_SIZE}
          />
          <App
            icon={<WhatsappIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Whatsapp"
            iconSize={ICON_SIZE}
          />
          <App
            icon={<GithubIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Github"
            iconSize={ICON_SIZE}
          />
        </View>
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
      </Animated.View>
    </View>
  );
}
