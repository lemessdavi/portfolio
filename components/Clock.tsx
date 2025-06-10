import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { format } from "date-fns";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState("12:00");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(format(new Date(), "HH:mm"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const styles = StyleSheet.create({
    clockContainer: {
      alignItems: "center",
      zIndex: 2,
      marginBottom: 40,
    },
    clockText: {
      fontSize: 68,
      fontFamily: "SpaceMono",
      color: "#fff",
    },
  });

  return (
    <View style={styles.clockContainer}>
      <Text style={styles.clockText}>{currentTime}</Text>
    </View>
  );
}
