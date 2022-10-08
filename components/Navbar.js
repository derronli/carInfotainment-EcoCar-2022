import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";

export default class Navbar extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.icons}>
          <AntDesign name="home" size={45} color="#FFF" />
          <TouchableOpacity onPress={this.props.onCarView}>
            <Ionicons
              name="car-sport-outline"
              size={45}
              color="#FFF"
              style={{
                paddingLeft: 12,
                paddingHorizontal: 8,
                borderColor: "tomato",
                borderRightWidth: this.props.carInfo ? 3 : 0,
              }}
            />
          </TouchableOpacity>
          <AntDesign name="phone" size={45} color="#FFF" />
          <Ionicons name="musical-notes-outline" size={45} color="#FFF" />
          <Entypo name="air" size={45} color="#FFF" />
        </View>
        <View style={{ flex: 0.2, backgroundColor: "black" }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icons: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  eachIcon: {},
});
