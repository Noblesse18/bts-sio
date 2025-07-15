import React, { useState } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Rechercher..."
        onChangeText={setSearch}
        value={search}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
        lightTheme
        round
      />
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: "absolute",
    top: 20,
    left: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: "transparent", // Important pour que la carte soit visible derrière
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 40,
  },
  map: {
    flex: 1,
  },
});
