import React, { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { PostCard } from "./PostCard";
import { PostDetail } from "./PostDetail";
import { Text } from "./Themed";
import SortIcon from "@/assets/svg/SortIcon";

interface Post {
  id: number;
  title: string;
  image: string;
  body: string;
  links: { title: string; url: string }[];
  category: string;
  date: string; // ISO date string
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
    category: "News",
    date: "2024-02-01",
  },
  {
    id: 2,
    title: "Exploring React Native",
    image: "https://placecats.com/400/201",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    links: [{ title: "Another link", url: "https://example.com" }],
    category: "Tutorial",
    date: "2024-01-15",
  },
  {
    id: 3,
    title: "A Day in My News",
    image: "https://placecats.com/400/201",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    links: [{ title: "Another link", url: "https://example.com" }],
    category: "News",
    date: "2023-12-20",
  },
  {
    id: 4,
    title: "Understanding TypeScript",
    image: "https://placecats.com/400/201",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    links: [{ title: "Another link", url: "https://example.com" }],
    category: "News",
    date: "2023-11-10",
  },
  {
    id: 5,
    title: "My Travel Journal",
    image: "https://placecats.com/400/202",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    links: [{ title: "Gallery", url: "https://example.com" }],
    category: "News",
    date: "2023-10-05",
  },
  // ... outros posts
];

interface BlogProps {
  onClose: () => void;
}

export default function Blog({ onClose }: BlogProps) {
  const [selected, setSelected] = useState<Post | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [orderDesc, setOrderDesc] = useState(true);
  const fade = useSharedValue(1);

  const categories = useMemo(
    () => Array.from(new Set(mockPosts.map((p) => p.category))),
    [],
  );

  const posts = useMemo(() => {
    const filtered = mockPosts.filter((p) => {
      const matchesCategory = !category || p.category === category;
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
    filtered.sort((a, b) => {
      const diff = new Date(b.date).getTime() - new Date(a.date).getTime();
      return orderDesc ? diff : -diff;
    });
    return filtered;
  }, [query, category, orderDesc]);

  useEffect(() => {
    fade.value = 0;
    fade.value = withTiming(1, { duration: 300 });
  }, [posts]);

  const listAnim = useAnimatedStyle(() => ({ opacity: fade.value }));

  if (selected) {
    return <PostDetail post={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#777"
          value={query}
          onChangeText={setQuery}
          style={styles.search}
        />
        <Pressable onPress={() => setOrderDesc((v) => !v)} style={styles.sort}>
          <SortIcon style={{ marginRight: 5 }} />
          <Text>{orderDesc ? "Newest" : "Oldest"}</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filters}
        contentContainerStyle={styles.filterContent}
      >
        <Pressable
          onPress={() => setCategory(null)}
          style={[styles.filter, !category && styles.filterActive]}
        >
          <Text>All</Text>
        </Pressable>
        {categories.map((cat) => (
          <Pressable
            key={cat}
            onPress={() => setCategory(cat)}
            style={[styles.filter, category === cat && styles.filterActive]}
          >
            <Text>{cat}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <Animated.View style={[{ height: "85%" }, listAnim]}>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <PostCard post={item} index={index} onSelect={setSelected} />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  search: {
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  filters: { paddingLeft: 20 },
  filterContent: { alignItems: "center" },
  filter: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  filterActive: { backgroundColor: "rgba(123,97,255,0.4)" },
  sort: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginLeft: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
    flexDirection: "row",
    alignItems: "center",
  },
  list: { paddingHorizontal: 20, paddingBottom: 40 },
});
