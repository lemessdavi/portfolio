import { StyleSheet, Text, View } from "react-native";

interface StatsProps {
  isSmallScreen: boolean;
}

export default function Stats({ isSmallScreen }: StatsProps) {
  const styles = StyleSheet.create({
    statsContainer: {
      flexDirection: isSmallScreen ? "column" : "row",
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: isSmallScreen ? "center" : "flex-start",
      width: isSmallScreen ? "100%" : "auto",
      paddingHorizontal: isSmallScreen ? 20 : 0,
    },
    statBlock: {
      flexDirection: isSmallScreen ? "column" : "row",
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: isSmallScreen ? 20 : 0,
    },
    statsNumber: {
      fontFamily: "SpaceMono",
      color: "#fff",
      fontSize: isSmallScreen ? 48 : 60,
      marginBottom: isSmallScreen ? 10 : 0,
      marginRight: isSmallScreen ? 0 : 20,
      textAlign: isSmallScreen ? "center" : "left",
      width: isSmallScreen ? "100%" : "40%",
    },
    statsText: {
      fontFamily: "SpaceMono",
      fontSize: isSmallScreen ? 16 : 20,
      color: "rgba(255, 255, 255, 0.8)",
      textAlign: isSmallScreen ? "center" : "left",
      width: isSmallScreen ? "100%" : "60%",
    },
  });

  return (
    <View style={styles.statsContainer}>
      <View style={styles.statBlock}>
        <Text style={styles.statsNumber}>+4.5</Text>
        <Text style={styles.statsText}>Years of Experience</Text>
      </View>
      <View style={styles.statBlock}>
        <Text style={styles.statsNumber}>+20</Text>
        <Text style={styles.statsText}>Apps Published</Text>
      </View>
    </View>
  );
}
