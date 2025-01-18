import ReactNativeIcon from "@/assets/svg/ReactNativeIcon";
import { Text, View } from "./Themed";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

interface TechCardProps {
  icon: React.JSX.Element;
  title: string;
  subtitle: string;
  style?: StyleProp<ViewStyle>;
}

export default function TechCard(techCardProps: TechCardProps) {
  return (
    <View
      style={[styles.techCard, techCardProps.style]}
      onPointerEnter={() => console.log("enter")}
      onPointerLeave={() => console.log("leave")}
    >
      <View style={styles.icon}>{techCardProps.icon}</View>
      <View style={styles.text}>
        <Text style={styles.title}>{techCardProps.title}</Text>
        <Text style={styles.subtitle}>{techCardProps.subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  techCard: {
    width: 300,
    borderRadius: 10,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    overflow: "hidden",
    padding: 10,
    justifyContent: "flex-start",
  },

  icon: {
    backgroundColor: "transparent",
    margin: 10,
  },

  text: {
    backgroundColor: "transparent",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 10,
  },

  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    fontFamily: "Excalifont",
  },

  subtitle: {
    fontSize: 14,
    fontFamily: "Excalifont",
  },
});
