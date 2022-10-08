import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default class HomeScreen extends Component {
  state = {
    carInfo: false,
  };

  handleCarView = () => {
    console.log("button Pressed!!");
    if (this.state.carInfo) {
      this.setState({ carInfo: false });
    } else {
      this.setState({ carInfo: true });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.08 }}>
          <Navbar onCarView={this.handleCarView} carInfo={this.state.carInfo} />
        </View>
        <View style={{ flex: 0.92 }}>
          <Image
            source={require("../assets/mapasd.png")}
            style={{ height: "100%" }}
          />
          {/* Car info slide in window */}

          {this.state.carInfo ? (
            <View style={styles.carInfo}>
              <View style={styles.carContainer}>
                <Image
                  source={require("../assets/carIma.png")}
                  style={{
                    resizeMode: "contain",
                    height: 400,
                  }}
                />
              </View>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#302c34",
    flexDirection: "row",
  },
  image: {
    flex: 1,
  },
  carInfo: {
    position: "absolute",
    width: "45%",
    height: "97.5%",
    backgroundColor: "rgba(86,79,93,0.9)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  carContainer: {
    alignContent: "center",
    justifyContent: "center",
  },
});
