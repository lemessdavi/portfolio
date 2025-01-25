import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  isSmallScreen: boolean;
}

export default function Header({ isSmallScreen }: HeaderProps) {
  const styles = StyleSheet.create({
    textContainer: {
      flexDirection: "column",
      backgroundColor: "transparent",
      alignSelf: isSmallScreen ? "center" : "flex-start",
    },
    title: {
      fontWeight: "bold",
      fontFamily: "Excalifont",
      color: "#fff",
      fontSize: isSmallScreen ? 40 : 60,
    },
    subtitle: {
      fontFamily: "Excalifont",
      marginBottom: 10,
      color: "#fff",
      fontSize: isSmallScreen ? 24 : 30,
    },
    highlighted: {
      color: "#00D8FF",
    },
    locationText: {
      fontFamily: "Excalifont",
      marginBottom: 40,
      color: "#999",
      fontSize: isSmallScreen ? 20 : 24,
    },
  });

  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>I'm Davi Lemes</Text>
      <Text style={styles.subtitle}>
        A Mobile <Text style={styles.highlighted}>Software Engineer</Text>
      </Text>
      <Text style={styles.locationText}>📍 Latin America, Brazil</Text>
    </View>
  );
}
