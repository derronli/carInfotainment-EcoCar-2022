import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
} from "react-native";
import Channel from "../components/Channel";
import MusicPlayer from "../components/MusicPlayer";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import Navbar from "../components/Navbar";
import AsyncStorage from "@react-native-async-storage/async-storage";

let newText = 100;
class MusicScreen extends Component {
  state = {
    channels: [
      { id: 1, value: "99.9" },
      { id: 2, value: "92.5" },
      { id: 3, value: "103.5" },
      { id: 4, value: "102.5" },
      { id: 5, value: "93.5" },
    ],
    currPlaying: "",
    isAddingChannel: false,
  };
  constructor(props) {
    super(props);
    this.getData();
  }

  handleChannelLongPress = (channelId) => {
    const channels = this.state.channels.filter((c) => c.id !== channelId);
    this.setState({ channels });
  };

  handleChannelPress = async (channel) => {
    console.log(channel);
    if (channel.value == this.state.currPlaying) {
      console.log("we are currently playing!");
    } else {
      try {
        this.setState({ currPlaying: channel.value });
        await AsyncStorage.setItem("currPlaying", channel.value);
      } catch (err) {
        console.log(err);
      }
    }
  };

  getData = async () => {
    try {
      const currPlaying = await AsyncStorage.getItem("currPlaying");
      const channel = await AsyncStorage.getItem("channels");
      const channels = JSON.parse(channel);
      console.log(currPlaying);

      if (channels != null) {
        this.setState({ channels });
      }
      if (currPlaying !== null) {
        this.setState({ currPlaying });
      }
    } catch (e) {}
  };

  addChannel = () => {
    if (this.state.channels.length != 6) {
      return (
        <TouchableOpacity onPress={this.addChannelPress}>
          <View style={styles.addChannelTag}>
            <Text style={styles.addChannelText}>
              <AntDesign name="plus" size={25} />
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  addChannelPress = () => {
    console.log("Add channel");
    this.setState({ isAddingChannel: true });
  };

  handleAddChannel = async (newChannelValue) => {
    console.log(newChannelValue);
    const channels = [
      ...this.state.channels,
      {
        id: this.state.channels[this.state.channels.length - 1].id + 1,
        value: newChannelValue,
      },
    ];
    this.setState({ channels, isAddingChannel: false });
    await AsyncStorage.setItem("channels", JSON.stringify(channels));
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Status Bar */}
        <View style={{ flex: 0.1, backgroundColor: "black" }}>
          <Header />
        </View>
        {/* Rest of the Screen */}
        <View style={{ flex: 0.9, flexDirection: "row" }}>
          {/* Side Navbar */}
          <View style={{ flex: 0.08 }}>
            <Navbar />
          </View>
          {/* Content */}
          <View style={{ flex: 0.92 }}>
            <StatusBar hidden />
            <View style={styles.musicPlayerWrapper}>
              <MusicPlayer currPlaying={this.state.currPlaying} />
              <View
                style={{
                  alignItems: "center",
                  bottom: 30,
                }}
              >
                {this.state.isAddingChannel ? (
                  <TextInput
                    style={styles.input}
                    placeholder="Hello Hello Hello"
                    onChangeText={(text) => (newText = text)}
                    onSubmitEditing={() => this.handleAddChannel(newText)}
                  />
                ) : null}
              </View>
            </View>
            <View style={styles.channelsWrapper}>
              {this.state.channels.map((channel) => (
                <Channel
                  key={channel.id}
                  channel={channel}
                  onLongPress={this.handleChannelLongPress}
                  onPress={this.handleChannelPress}
                />
              ))}
              {this.addChannel()}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#302c34",
  },
  channelsWrapper: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0.75,
  },

  addChannelTag: {
    backgroundColor: "#564f5d",
    padding: 20,
    borderRadius: 15,
  },

  addChannelText: {
    color: "#FFF",
  },

  musicPlayerWrapper: {
    flex: 6,
    marginBottom: 30,
  },

  statusBar: {
    backgroundColor: "orange",
    flex: 0.8,
  },

  input: {
    width: 175,
    backgroundColor: "#564f5d",
    padding: 10,
    borderRadius: 20,
  },
});

export default MusicScreen;
