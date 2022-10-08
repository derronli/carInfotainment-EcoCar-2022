import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        {/* <Image source={require("../assets/icon.png")} /> */}
        <View style={styles.columnContainer}>
          <Text style={styles.headerText}>19:24</Text>
          <Ionicons
            name="battery-half-sharp"
            size={30}
            style={styles.headerIcon}
          />
        </View>
        <View style={styles.columnContainer}>
          {/* <Text style={styles.headerText}>THIS IS THE WINDOW NAME</Text> */}
        </View>
        <View style={[styles.columnContainer, styles.just]}>
          <Text style={styles.headerText}>15°C</Text>
          <Ionicons name="wifi-outline" size={30} style={styles.headerIcon} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  columnContainer: {
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },

  headerIcon: {
    marginHorizontal: 10,
    color: "#FFF",
  },

  headerText: {
    fontSize: 20,
    marginHorizontal: 10,
    color: "#FFF",
  },
  just: {
    justifyContent: "flex-end",
  },
});
