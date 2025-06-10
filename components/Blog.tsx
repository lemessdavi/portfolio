import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Dimensions,
  View,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PostCard } from "./PostCard";
import { PostDetail } from "./PostDetail";
import { Text } from "./Themed";

interface Post {
  id: number;
  title: string;
  image: string;
  body: string;
  links: { title: string; url: string }[];
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: "First Post",
    image: "https://placecats.com/400/200",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien arcu. Vivamus non lorem ut tortor pretium placerat.",
    links: [
      { title: "Read more", url: "https://example.com" },
      { title: "Source", url: "https://example.com" },
    ],
  },
  {
    id: 2,
    title: "Second Post",
    image: "https://placecats.com/400/201",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    links: [{ title: "Another link", url: "https://example.com" }],
  },
  {
    id: 3,
    title: "Second Post",
    image: "https://placecats.com/400/201",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    links: [{ title: "Another link", url: "https://example.com" }],
  },
  {
    id: 4,
    title: "Second Post",
    image: "https://placecats.com/400/201",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    links: [{ title: "Another link", url: "https://example.com" }],
  },
  // ... outros posts
];

interface BlogProps {
  onClose: () => void;
}

export default function Blog({ onClose }: BlogProps) {
  const [selected, setSelected] = useState<Post | null>(null);

  if (selected) {
    return <PostDetail post={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={onClose} style={styles.backButton}>
        <Text>Back</Text>
      </Pressable>
      <FlatList
        data={mockPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <PostCard post={item} index={index} onSelect={setSelected} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backButton: { marginLeft: 20, marginBottom: 10 },
  list: { paddingHorizontal: 20, paddingBottom: 40 },
});
