import React from "react";
import { Linking, StyleSheet, View } from "react-native";
import App from "@/components/App";
import DailyDevIcon from "@/assets/svg/DailyDevIcon";
import ExpoIcon from "@/assets/svg/ExpoIcon";
import AppleIcon from "@/assets/svg/AppleIcon";
import BlogIcon from "@/assets/svg/BlogIcon";

interface AppGridProps {
  ICON_SIZE: number;
  onBlogPress?: () => void;
}

export default function AppGrid({ ICON_SIZE, onBlogPress }: AppGridProps) {
  const styles = StyleSheet.create({
    appRow: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: 30,
    },
  });

  return (
    <View style={styles.appRow}>
      <App
        icon={<DailyDevIcon width={ICON_SIZE} height={ICON_SIZE} />}
        title="daily.dev"
        iconSize={ICON_SIZE}
        onPress={() => {
          Linking.openURL("https://app.daily.dev/lemessdavi");
        }}
      />
      <App
        icon={<ExpoIcon width={ICON_SIZE} height={ICON_SIZE} />}
        title="Project"
        iconSize={ICON_SIZE}
        onPress={() => {
          Linking.openURL("https://github.com/lemessdavi/portfolio");
        }}
      />
      <App
        icon={<BlogIcon width={ICON_SIZE} height={ICON_SIZE} />}
        title="Blog"
        iconSize={ICON_SIZE}
        onPress={onBlogPress}
      />
      <App
        icon={<AppleIcon fill={"#fff"} width={ICON_SIZE} height={ICON_SIZE} />}
        title="BirdFlap"
        iconSize={ICON_SIZE}
        onPress={() => {
          console.log("Something");
        }}
      />
    </View>
  );
}
