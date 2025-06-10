import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";

interface BlogProps {
  onClose?: () => void;
}

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
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien arcu.",
    links: [
      { title: "Read more", url: "https://example.com" },
      { title: "Source", url: "https://example.com" },
    ],
  },
  {
    id: 2,
    title: "Second Post",
    image: "https://placecats.com/400/201",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    links: [{ title: "Another link", url: "https://example.com" }],
  },
  {
    id: 3,
    title: "Second Post",
    image: "https://placecats.com/400/201",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    links: [{ title: "Another link", url: "https://example.com" }],
  },
  {
    id: 4,
    title: "Second Post",
    image: "https://placecats.com/400/201",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    links: [{ title: "Another link", url: "https://example.com" }],
  },
];

export default function Blog({ onClose }: BlogProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,

      borderRadius: 40,
    },
    back: {
      color: "#fff",
      fontSize: 16,
      marginBottom: 30,
      marginLeft: 10,
    },
    post: {
      marginBottom: 30,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
      marginBottom: 10,
      fontFamily: "Excalifont",
    },
    body: {
      fontSize: 14,
      color: "#ccc",
      marginBottom: 10,
      fontFamily: "Excalifont",
    },
    image: {
      width: "100%",
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
    },
    link: {
      color: "#7B61FF",
      marginRight: 15,
      fontFamily: "Excalifont",
    },
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={onClose}>
        <Text style={styles.back}>Back</Text>
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        {mockPosts.map((post) => (
          <View key={post.id} style={styles.post}>
            <Image source={{ uri: post.image }} style={styles.image} />
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.body}>{post.body}</Text>
            <View style={{ flexDirection: "row" }}>
              {post.links.map((link, index) => (
                <Pressable
                  key={index}
                  onPress={() => Linking.openURL(link.url)}
                >
                  <Text style={styles.link}>{link.title}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
