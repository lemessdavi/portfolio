import { StyleSheet, Text } from "react-native";
import BaseApp, { BaseAppProps } from "./BaseApp";

interface AppProps extends Omit<BaseAppProps, "children"> {
  title: string;
  onPress?: VoidFunction;
}

export default function App({ icon, title, iconSize, onPress }: AppProps) {
  const styles = StyleSheet.create({
    iconStyle: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: 20,
      width: iconSize + 20,
      height: iconSize + 20,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
    title: {
      fontSize: 12,
      marginTop: 8,
      alignSelf: "center",
    },
  });

  return (
    <BaseApp
      iconStyle={styles.iconStyle}
      icon={icon}
      iconSize={iconSize}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </BaseApp>
  );
}
