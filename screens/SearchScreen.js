import React, { useEffect, useState } from "react";

import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import PressText from "../components/PressText";
const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("recently");
  const [filteredNoices, setFilteredNoices] = useState([]);
  const noices = useSelector((state) => state.noice.noices);

  const sortNoices = (search, sort) => {
    // to filter by searchValue
    const newNoiceList = noices.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    // to filter by sortValue
    switch (sort) {
      case "recently":
        return setFilteredNoices(newNoiceList);
      case "isDone":
        return setFilteredNoices(
          newNoiceList.filter((item) => item.isDone === true)
        );
      case "isFavorite":
        return setFilteredNoices(
          newNoiceList.filter((item) => item.isFavorite === true)
        );
    }
  };

  useEffect(() => {
    sortNoices(searchValue, sortValue);
    // to run when screen showed, text changed and also sort changed
  }, [searchValue, noices, sortValue]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchValue}
          onChangeText={(value) => setSearchValue(value)}
          placeholder="Search..."
        />
      </View>
      <View style={styles.sortContainer}>
        <PressText
          onPress={() => setSortValue("isFavorite")}
          isActive={sortValue === "isFavorite"}
        >
          Favorites
        </PressText>
        <PressText
          onPress={() => setSortValue("isDone")}
          isActive={sortValue === "isDone"}
        >
          Done
        </PressText>
        <PressText
          onPress={() => setSortValue("recently")}
          isActive={sortValue === "recently"}
        >
          Recently
        </PressText>
      </View>
      <FlatList
        style={styles.cardContainer}
        data={filteredNoices}
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
});

export default SearchScreen;
