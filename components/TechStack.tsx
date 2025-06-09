import { StyleSheet, View } from "react-native";
import TechCard from "./TechCard";
import ReactNativeIcon from "@/assets/svg/ReactNativeIcon";
import ExpoIcon from "@/assets/svg/ExpoIcon";
import TypeScriptIcon from "@/assets/svg/TypeScriptIcon";
import NodeIcon from "@/assets/svg/NodeIcon";

interface TechStackProps {
  ICON_SIZE: number;
  isSmallScreen: boolean;
  onTechCardPress?: () => void;
}

export default function TechStack({
  ICON_SIZE,
  isSmallScreen,
  onTechCardPress,
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
          onPress={onTechCardPress}
        />
        <TechCard
          icon={<ExpoIcon width={ICON_SIZE} height={ICON_SIZE} />}
          title="Expo"
          subtitle="RN on Steroids"
          style={{ marginLeft: 10 }}
          gradientColors={[
            "rgba(255, 245, 103, 0.15)",
            "rgba(255, 245, 103, 0.05)",
          ]}
          onPress={onTechCardPress}
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
          onPress={onTechCardPress}
        />
        <TechCard
          icon={<NodeIcon width={ICON_SIZE} height={ICON_SIZE} />}
          title="Node.js"
          subtitle="JS on the server 😈"
          style={{ marginLeft: 10 }}
          gradientColors={[
            "rgba(97, 251, 125, 0.15)",
            "rgba(97, 218, 251, 0.05)",
          ]}
          onPress={onTechCardPress}
        />
      </View>
    </View>
  );
}
