import { StyleSheet, View } from "react-native";
import TechCard from "./TechCard";
import ReactNativeIcon from "@/assets/svg/ReactNativeIcon";
import ExpoIcon from "@/assets/svg/ExpoIcon";
import TypeScriptIcon from "@/assets/svg/TypeScriptIcon";
import NodeIcon from "@/assets/svg/NodeIcon";

interface TechStackProps {
  ICON_SIZE: number;
  isSmallScreen: boolean;
}

export default function TechStack({
  ICON_SIZE,
  isSmallScreen,
}: TechStackProps) {
  const styles = StyleSheet.create({
    techStackContainer: {
      flexDirection: "column",
      backgroundColor: "transparent",
      alignSelf: isSmallScreen ? "center" : "flex-start",
      marginVertical: isSmallScreen ? 20 : 0,
    },
    horizontalContainer: {
      flexDirection: isSmallScreen ? "column" : "row",
      backgroundColor: "transparent",
    },
  });

  return (
    <View style={styles.techStackContainer}>
      <View style={styles.horizontalContainer}>
        <TechCard
          icon={<ReactNativeIcon width={ICON_SIZE} height={ICON_SIZE} />}
          title="React Native"
          subtitle="Better than Flutter"
          style={{ marginRight: 10 }}
          gradientColors={[
            "rgba(97, 218, 251, 0.15)",
            "rgba(97, 218, 251, 0.05)",
          ]}
        />
        <TechCard
          icon={<ExpoIcon width={ICON_SIZE} height={ICON_SIZE} />}
          title="Expo"
          subtitle="To do everything"
          gradientColors={[
            "rgba(255, 255, 255, 0.15)",
            "rgba(255, 255, 255, 0.05)",
          ]}
        />
      </View>
      <View style={styles.horizontalContainer}>
        <TechCard
          icon={<TypeScriptIcon width={ICON_SIZE} height={ICON_SIZE} />}
          title="TypeScript"
          subtitle="To fill it with any"
          style={{ marginRight: 10 }}
          gradientColors={[
            "rgba(49, 120, 198, 0.15)",
            "rgba(49, 120, 198, 0.05)",
          ]}
        />
        <TechCard
          icon={<NodeIcon width={ICON_SIZE} height={ICON_SIZE} />}
          title="Node.js"
          subtitle="JS on the server 😈"
          gradientColors={[
            "rgba(83, 158, 67, 0.15)",
            "rgba(83, 158, 67, 0.05)",
          ]}
        />
      </View>
    </View>
  );
}
