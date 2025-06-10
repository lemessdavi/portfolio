import { useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import TechStack from "./TechStack";
import DigitalCard from "./DigitalCard";

interface TechSectionProps {
  ICON_SIZE: number;
  isSmallScreen: boolean;
}

export default function TechSection({
  ICON_SIZE,
  isSmallScreen,
}: TechSectionProps) {
  const [showDigitalCard, setShowDigitalCard] = useState(false);
  const fadeAnim = useState(new Animated.Value(1))[0];

  const handleTechCardPress = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShowDigitalCard(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleDigitalCardPress = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShowDigitalCard(false);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "flex-start",
      alignSelf: isSmallScreen ? "center" : "flex-start",
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        {showDigitalCard ? (
          <DigitalCard onPress={handleDigitalCardPress} />
        ) : (
          <TechStack
            ICON_SIZE={ICON_SIZE}
            isSmallScreen={isSmallScreen}
            onTechCardPress={handleTechCardPress}
          />
        )}
      </Animated.View>
    </View>
  );
}
