import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import ReactNativeIcon from "@/assets/svg/ReactNativeIcon";
import TechCard from "@/components/TechCard";
import ExpoIcon from "@/assets/svg/ExpoIcon";
import TypeScriptIcon from "@/assets/svg/TypeScriptIcon";
import NodeIcon from "@/assets/svg/NodeIcon";
import Smartphone from "@/components/Smartphone";
import { useWindowDimensions } from "react-native";

export default function TabOneScreen() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;
  const ICON_SIZE = isSmallScreen ? 40 : 60;

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
        },
      ]}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    >
      <View
        style={[
          styles.leftContainer,
          {
            width: isSmallScreen ? "100%" : "50%",
            paddingLeft: isSmallScreen ? 20 : 100,
          },
        ]}
      >
        <View style={styles.textContainer}>
          <Text style={[styles.title, { fontSize: isSmallScreen ? 40 : 60 }]}>
            I'm Davi Lemes
          </Text>
          <Text
            style={[styles.subtitle, { fontSize: isSmallScreen ? 24 : 30 }]}
          >
            A Mobile <Text style={styles.highlighted}>Software Engineer</Text>
          </Text>
          <Text
            style={[styles.locationText, { fontSize: isSmallScreen ? 20 : 24 }]}
          >
            📍 Latin America, Brazil
          </Text>
        </View>

        <View style={styles.techStackContainer}>
          <View style={styles.horitonalContainer}>
            <TechCard
              icon={<ReactNativeIcon width={ICON_SIZE} height={ICON_SIZE} />}
              title="React Native"
              subtitle="Better than Flutter"
              style={{ marginRight: 10 }}
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
              style={{ marginRight: 10 }}
            />
            <TechCard
              icon={<NodeIcon width={ICON_SIZE} height={ICON_SIZE} />}
              title="Node.js"
              subtitle="JS on the server 😈"
            />
          </View>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <Smartphone />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  leftContainer: {
    backgroundColor: "transparent",
    alignSelf: "center",
    alignItems: "center",
  },
  rightContainer: {
    width: "50%",
    backgroundColor: "transparent",
    alignSelf: "center",
    alignItems: "center",
  },
  techStackContainer: {
    flexDirection: "column",
    backgroundColor: "transparent",
    alignSelf: "flex-start",
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
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Excalifont",
  },
  subtitle: {
    fontFamily: "Excalifont",
    marginBottom: 10,
  },
  highlighted: {
    color: "#00D8FF",
  },
  locationText: {
    fontFamily: "Excalifont",
    marginBottom: 40,
    color: "#999",
  },
});
