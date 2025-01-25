import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import ReactNativeIcon from "@/assets/svg/ReactNativeIcon";
import TechCard from "@/components/TechCard";
import ExpoIcon from "@/assets/svg/ExpoIcon";
import TypeScriptIcon from "@/assets/svg/TypeScriptIcon";
import NodeIcon from "@/assets/svg/NodeIcon";
import Smartphone from "@/components/Smartphone";
import { useWindowDimensions } from "react-native";
import SpaceBackground from "@/components/SpaceBackground";

export default function TabOneScreen() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;
  const ICON_SIZE = isSmallScreen ? 40 : 60;

  return (
    <View style={styles.mainContainer}>
      <SpaceBackground />
      <View
        style={[
          styles.container,
          {
            flexDirection: isSmallScreen ? "column" : "row",
            alignItems: "center",
          },
        ]}
        lightColor="transparent"
        darkColor="transparent"
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
              style={[
                styles.locationText,
                { fontSize: isSmallScreen ? 20 : 24 },
              ]}
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
            <View style={styles.horitonalContainer}>
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

          <View style={styles.statsContainer}>
            <View style={styles.statBlock}>
              <Text
                style={[
                  styles.statsNumber,
                  { fontSize: isSmallScreen ? 40 : 60 },
                ]}
              >
                +4.5
              </Text>
              <Text style={[styles.statsText]}>Years of Experience</Text>
            </View>
            <View style={styles.statBlock}>
              <Text
                style={[
                  styles.statsNumber,
                  { fontSize: isSmallScreen ? 40 : 60 },
                ]}
              >
                +20
              </Text>
              <Text style={[styles.statsText]}>Apps Published</Text>
            </View>
          </View>
        </View>

        <View style={styles.rightContainer}>
          <Smartphone />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  // Update text colors to be more visible on dark background
  title: {
    fontWeight: "bold",
    fontFamily: "Excalifont",
    color: "#fff",
  },
  subtitle: {
    fontFamily: "Excalifont",
    marginBottom: 10,
    color: "#fff",
  },
  statsText: {
    fontFamily: "SpaceMono",
    fontSize: 20,
    textOverflow: "ellipsis",
    alignContent: "center",
    alignSelf: "center",
    marginLeft: 10,
    flex: 6,
    color: "#fff",
  },
  statsNumber: {
    fontFamily: "SpaceMono",
    marginBottom: 10,
    flex: 4,
    color: "#fff",
  },
  leftContainer: {
    height: "80%",
    backgroundColor: "transparent",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
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
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  statBlock: {
    flexDirection: "row",
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    alignItems: "center",
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
