import React from "react";
import { StyleSheet, View } from "react-native";
import FavoriteApp from "./FavoriteApp";
import LinkedinIcon from "@/assets/svg/LinkedinIcon";
import GmailIcon from "@/assets/svg/GmailIcon";
import WhatsappIcon from "@/assets/svg/Whatsapp";
import GithubIcon from "@/assets/svg/GithubIcon";

interface FavoriteBarProps {
  ICON_SIZE: number;
}

export default function FavoriteBar({ ICON_SIZE }: FavoriteBarProps) {
  const styles = StyleSheet.create({
    bottomBar: {
      position: "absolute",
      bottom: 40,
      left: 0,
      right: 0,
      height: 80,
      backgroundColor: "rgba(255,255,255,0.1)",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      marginHorizontal: 24,
      borderRadius: 25,
      paddingHorizontal: 20,
    },
  });

  return (
    <View style={styles.bottomBar}>
      <FavoriteApp
        icon={<LinkedinIcon width={ICON_SIZE} height={ICON_SIZE} />}
        title="Linkedin"
        iconSize={ICON_SIZE}
      />
      <FavoriteApp
        icon={<GmailIcon width={ICON_SIZE} height={ICON_SIZE} />}
        title="Gmail"
        iconSize={ICON_SIZE}
      />
      <FavoriteApp
        icon={<WhatsappIcon width={ICON_SIZE} height={ICON_SIZE} />}
        title="Whatsapp"
        iconSize={ICON_SIZE}
      />
      <FavoriteApp
        icon={<GithubIcon width={ICON_SIZE} height={ICON_SIZE} />}
        title="Github"
        iconSize={ICON_SIZE}
      />
    </View>
  );
}
