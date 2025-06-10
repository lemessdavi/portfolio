import React, { useEffect } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  interpolate,
} from "react-native-reanimated";

interface Post {
  id: number;
  title: string;
  image: string;
  body: string;
  links: { title: string; url: string }[];
}

interface PostCardProps {
  post: Post;
  onSelect: (post: Post) => void;
  index: number;
}

export function PostCard({ post, onSelect, index }: PostCardProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(index * 100, withTiming(1, { duration: 500 }));
  }, []);

  const animStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [
      {
        translateY: interpolate(progress.value, [0, 1], [50, 0]),
      },
    ],
  }));

  const truncate = (text: string, limit = 100) =>
    text.length > limit ? text.substr(0, limit) + "..." : text;

  return (
    <Animated.View style={[styles.card, animStyle]}>
      <Pressable onPress={() => onSelect(post)}>
        <Image source={{ uri: post.image }} style={styles.image} />
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{truncate(post.body)}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 30,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
    marginHorizontal: 15,
  },
  body: {
    fontSize: 14,
    color: "#ddd",
    marginVertical: 10,
    marginHorizontal: 15,
  },
});
