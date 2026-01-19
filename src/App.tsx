import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LanguageToggle from "./LanguageToggle";
import VideoCard from "./VideoCard";
import RegionCheck from "./RegionCheck";

export default function App() {
  return (
    <RegionCheck>
      <View style={styles.container}>
        <Text style={styles.title}>Poket Load</Text>
        <LanguageToggle />
        <VideoCard />
      </View>
    </RegionCheck>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#0f172a",
  },
  title: {
    fontSize: 24,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
});
