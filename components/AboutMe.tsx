import { StyleSheet, View } from "react-native";
import { Text } from "./Themed";

export default function AboutMe() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 40,
      gap: 60,
      flexDirection: "row",
    },
    title: {
      fontSize: 48,
      fontFamily: "Excalifont",
      color: "#fff",
      marginBottom: 20,
    },
    text: {
      fontSize: 18,
      color: "#fff",
      textAlign: "center",
      maxWidth: 600,
      lineHeight: 28,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.text}>
        I'm a passionate Mobile Software Engineer with expertise in React Native
        and a love for creating beautiful, performant applications. With over 4
        years of experience, I've published more than 20 apps and continue to
        push the boundaries of what's possible in mobile development.
      </Text>
    </View>
  );
}
