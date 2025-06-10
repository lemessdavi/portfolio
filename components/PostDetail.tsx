import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
  Linking,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

interface Post {
  id: number;
  title: string;
  image: string;
  body: string;
  links: { title: string; url: string }[];
}

interface PostDetailProps {
  post: Post;
  onBack: () => void;
}

export function PostDetail({ post, onBack }: PostDetailProps) {
  const anim = useSharedValue(0);
  useEffect(() => {
    anim.value = withTiming(1, { duration: 400 });
  }, []);

  const detailStyle = useAnimatedStyle(() => ({
    opacity: anim.value,
    transform: [
      {
        scale: interpolate(anim.value, [0, 1], [0.8, 1]),
      },
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, detailStyle]}>
        <Pressable onPress={onBack}>
          <Text style={styles.back}>Back to List</Text>
        </Pressable>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={{ uri: post.image }} style={styles.image} />
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.body}>{post.body}</Text>
          <View style={styles.links}>
            {post.links.map((link, idx) => (
              <Pressable key={idx} onPress={() => Linking.openURL(link.url)}>
                <Text style={styles.link}>{link.title}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
  content: { flex: 1, paddingHorizontal: 20 },
  back: { color: "#fff", fontSize: 18, marginBottom: 20 },
  image: {
    width: "100%",
    height: width * 0.15,
    borderRadius: 12,
    marginBottom: 15,
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  body: { fontSize: 16, color: "#eee", lineHeight: 24, marginBottom: 20 },
  links: { flexDirection: "row", flexWrap: "wrap", marginBottom: 40 },
  link: { color: "#7B61FF", marginRight: 20, fontSize: 16 },
});
