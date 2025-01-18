import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import ReactNativeIcon from "@/assets/svg/ReactNativeIcon";
import TechCard from "@/components/TechCard";
import ExpoIcon from "@/assets/svg/ExpoIcon";
import TypeScriptIcon from "@/assets/svg/TypeScriptIcon";

export default function TabOneScreen() {
  const ICON_SIZE = 60;

  return (
    <View style={styles.container} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
      <Text style={styles.title}>I'm Davi Lemes</Text>
      <Text style={styles.subtitle}>A Mobile Software Engineer</Text>

      <View style={styles.horitonalContainer}>
        <TechCard
          icon={<ReactNativeIcon width={ICON_SIZE} height={ICON_SIZE} />}
          title="React Native"
          subtitle="Better then Flutter"
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
        />

        <TechCard
          icon={<ReactNativeIcon width={ICON_SIZE} height={ICON_SIZE} />}
          title="Node.js"
          subtitle="JS on the server 😈"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Excalifont",
  },
  subtitle: {
    fontSize: 24,
    fontFamily: "Excalifont",
  },
  verticalContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginVertical: 20,
  },
  horitonalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    margin: 10,
  },
});
