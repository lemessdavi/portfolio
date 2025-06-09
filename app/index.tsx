import { StyleSheet, ScrollView } from "react-native";
import { View } from "@/components/Themed";
import Smartphone from "@/components/Smartphone";
import { useWindowDimensions } from "react-native";
import SpaceBackground from "@/components/SpaceBackground";
import Header from "@/components/Header";
import TechSection from "@/components/TechSection";
import Stats from "@/components/Stats";

export default function TabOneScreen() {
  const { width, height } = useWindowDimensions();
  const isSmallScreen = width < 768;
  const ICON_SIZE = isSmallScreen ? 40 : 60;

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      minHeight: height,
    },
    scrollView: {
      flexGrow: 1,
      width: "80%",
      alignSelf: "center",
    },
    container: {
      flex: 1,
      flexDirection: isSmallScreen ? "column" : "row",
      backgroundColor: "transparent",
    },
    aboutContainer: {
      flex: isSmallScreen ? 1 : 0.5,
      minHeight: isSmallScreen ? "auto" : height,
      paddingHorizontal: isSmallScreen ? 20 : 100,
      paddingVertical: 40,
      backgroundColor: "transparent",
      gap: isSmallScreen ? 0 : 100,
      margin: 10,
      justifyContent: "center",
    },
    phoneContainer: {
      flex: isSmallScreen ? "auto" : 0.5,
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.mainContainer}>
      <SpaceBackground />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {isSmallScreen ? (
          <View style={styles.aboutContainer}>
            <Header isSmallScreen={isSmallScreen} />
            <View style={styles.phoneContainer}>
              <Smartphone />
            </View>
            <TechSection ICON_SIZE={ICON_SIZE} isSmallScreen={isSmallScreen} />
            <Stats isSmallScreen={isSmallScreen} />
          </View>
        ) : (
          <>
            <View style={styles.aboutContainer}>
              <Header isSmallScreen={isSmallScreen} />
              <TechSection
                ICON_SIZE={ICON_SIZE}
                isSmallScreen={isSmallScreen}
              />
              <Stats isSmallScreen={isSmallScreen} />
            </View>
            <View style={styles.phoneContainer}>
              <Smartphone />
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}
