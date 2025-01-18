import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import ReactNativeIcon from "@/assets/svg/ReactNativeIcon";
import TechCard from "@/components/TechCard";

export default function TabOneScreen() {
  return (
    <View style={styles.container} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
      <Text style={styles.title}>I'm Davi Lemes</Text>
      <Text style={styles.subtitle}>A Mobile Software Engineer</Text>

      <TechCard
        icon={<ReactNativeIcon width={100} height={100} />}
        title="React Native"
        subtitle="Better then Flutter"
      />
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
});
