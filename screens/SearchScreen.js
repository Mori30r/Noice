import React from "react";

import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
  Text,
} from "react-native";
import { useSelector } from "react-redux";
import Card from "../components/Card";
const SearchScreen = () => {
  const noices = useSelector((state) => state.noice.noices);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.searchInput} placeholder="Search..." />
      </View>
      <View style={styles.sortContainer}>
        <Text style={styles.sortText}>Important</Text>
        <Text style={styles.sortText}>Done</Text>
        <Text style={styles.sortTextActive}>Recently</Text>
      </View>
      <FlatList
        style={styles.cardContainer}
        data={noices}
        renderItem={(noice) => {
          return <Card noice={noice} />;
        }}
      />
    </View>
  );
};
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    padding: 10,
    borderWidth: 1,
    margin: 20,
    borderRadius: 5,
  },
  searchInput: {},
  cardContainer: {
    marginBottom: height / 4.7,
  },
  sortContainer: {
    elevation: 10,
    flexDirection: "row",
    backgroundColor: "grey",
    height: height / 12,
    marginHorizontal: width / 10,
    borderRadius: 50,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  sortText: {
    fontSize: 15,
  },
  sortTextActive: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default SearchScreen;
