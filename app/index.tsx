import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import ReactNativeIcon from "@/assets/svg/ReactNativeIcon";
import TechCard from "@/components/TechCard";
import ExpoIcon from "@/assets/svg/ExpoIcon";
import TypeScriptIcon from "@/assets/svg/TypeScriptIcon";
import NodeIcon from "@/assets/svg/NodeIcon";

export default function TabOneScreen() {
  const ICON_SIZE = 60;

  return (
    <View
      style={styles.container}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>I'm Davi Lemes</Text>
        <Text style={styles.subtitle}>A Mobile Software Engineer</Text>
        <Text style={styles.locationText}>📍 Latin America, Brazil</Text>
      </View>

      <View style={styles.techStackContainer}>
        <View style={styles.horitonalContainer}>
          <TechCard
            icon={<ReactNativeIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="React Native"
            subtitle="Better then Flutter"
            style={{ marginRight: 20 }}
          />
          <TechCard
            icon={<ExpoIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Expo"
            subtitle="To do everything"
          />
        </View>
        <View style={styles.horitonalContainer}>
          <TechCard
            icon={<TypeScriptIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="TypeScript"
            subtitle="To fill it with any"
            style={{ marginRight: 20 }}
          />

          <TechCard
            icon={<NodeIcon width={ICON_SIZE} height={ICON_SIZE} />}
            title="Node.js"
            subtitle="JS on the server 😈"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  techStackContainer: {
    flexDirection: "column",
    backgroundColor: "transparent",
    left: 40,
    top: 60,
  },
  horitonalContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 10,
  },

  textContainer: {
    flexDirection: "column",
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    left: 60,
    top: 60,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "Excalifont",
  },
  subtitle: {
    fontSize: 30,
    fontFamily: "Excalifont",
    marginBottom: 10,
  },
  locationText: {
    fontSize: 24,
    fontFamily: "Excalifont",
    marginBottom: 80,
    color: "#999",
  },
});
