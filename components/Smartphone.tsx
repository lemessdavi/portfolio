import App from "@/components/App";
import LinkedinIcon from "@/assets/svg/LinkedinIcon";
import SmartphoneSVG from "@/assets/svg/SmartphoneSVG";
import React from "react";
import { View, StyleSheet } from "react-native";
import GmailIcon from "@/assets/svg/GmailIcon";
import WhatsappIcon from "@/assets/svg/Whatsapp";
import GithubIcon from "@/assets/svg/GithubIcon";
import DailyDevIcon from "@/assets/svg/DailyDevIcon";
import ExpoIcon from "@/assets/svg/ExpoIcon";

export default function Smartphone() {
  const PHONE_WIDTH = 400;
  const PHONE_HEIGHT = 800;
  const ICON_SIZE = 50;

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
      <SmartphoneSVG PHONE_WIDTH={PHONE_WIDTH} PHONE_HEIGHT={PHONE_HEIGHT} />

      <View style={styles.appsContainer}>
        <View style={styles.appRow}>
          <App
            icon={<LinkedinIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Linkedin"
          />
          <App
            icon={<GmailIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Gmail"
          />
          <App
            icon={<WhatsappIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Whatsapp"
          />
          <App
            icon={<GithubIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Github"
          />
        </View>
        <View style={styles.appRow}>
          <App
            icon={<DailyDevIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="daily.dev"
          />
          <App
            icon={<ExpoIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Project"
          />
          <App
            icon={<ExpoIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Flappy"
          />
          <App
            icon={<ExpoIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="somthing"
          />
        </View>
      </View>
    </View>
  );
}
