import { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class MusicPlayer extends Component {
  render() {
    return (
      <View>
        <View style={styles.displayContainer}>
          <View style={{ width: "70%", padding: 75 }}>
            <Image
              source={require("../assets/asblum.jpg")}
              style={styles.image}
            />
          </View>
          <View style={{ width: "30%" }}>
            <Text
              style={{
                fontSize: 75,
                fontWeight: "bold",
                top: 100,
                color: "white",
              }}
            >
              {this.props.currPlaying}
            </Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Ionicons
            name="play-skip-back-circle-outline"
            size={75}
            style={styles.musicIcons}
          />
          <Ionicons
            name="pause-circle-outline"
            size={75}
            style={styles.musicIcons}
          />
          <Ionicons
            name="play-skip-forward-circle-outline"
            size={75}
            style={styles.musicIcons}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  displayContainer: {
    height: "75%",
    flexDirection: "row",
  },

  buttonsContainer: {
    height: "25%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    borderColor: "#FFF",
  },

  musicIcons: {
    color: "#FFF",
    marginHorizontal: 30,
  },
});
