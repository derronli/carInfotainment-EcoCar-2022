import { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

export default class Channel extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress(this.props.channel)}
        onLongPress={() => this.props.onLongPress(this.props.channel.id)} //passing entire channel object (so like a row in our state array)
      >
        <View style={styles.channelTag}>
          <Text style={styles.channel}>{this.props.channel.value}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  channelTag: {
    backgroundColor: "#564f5d",
    padding: 20,
    borderRadius: 15,
  },
  channel: {
    color: "#FFF",
  },
});
