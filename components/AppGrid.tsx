import React from "react";
import { StyleSheet, View } from "react-native";
import App from "@/components/App";
import DailyDevIcon from "@/assets/svg/DailyDevIcon";
import ExpoIcon from "@/assets/svg/ExpoIcon";
import AppleIcon from "@/assets/svg/AppleIcon";

interface AppGridProps {
  ICON_SIZE: number;
}

export default function AppGrid({ ICON_SIZE }: AppGridProps) {
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
        icon={<AppleIcon fill={"#fff"} width={ICON_SIZE} height={ICON_SIZE} />}
        title="Something"
        iconSize={ICON_SIZE}
      />
    </View>
  );
}
