import React from "react";
import { StyleSheet, Alert, Text, View } from "react-native";
import PomodoroButton from "./components/Button";

numFormat = function(n) {
  return Math.abs(n) > 9 ? n : "0"+n;
}

export default class App extends React.Component {
  timer = null;
  constructor(props) {
    super(props);
    this.state = {
      status: "toWork",
      timeRemaining: 5
    };
  }

  // Experimental syntax
  onButtonPress = (nextStatus) => {
    this.setState({
      status: nextStatus
    });
    if (!this.timer) {
      this.timer = setInterval(this.decrementTimer, 1000);
    }
  }

  decrementTimer = () => {
    if (this.state.timeRemaining === 0) {
      // TODO: Fix alert timing
      clearInterval(this.timer);
      this.timer = null;
      Alert.alert("Time's up!");
    } else {
      this.setState({
        timeRemaining: this.state.timeRemaining - 1
      });
    }
  }

  render() {
    const timeFormat = `${numFormat(Math.floor(this.state.timeRemaining/60))}:${numFormat(this.state.timeRemaining%60)}`;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>🍅 It's Pomodoro Time 🍅</Text>
        <Text style={styles.main}>{timeFormat}</Text>
        <View style={styles.button}>
          <PomodoroButton onButtonPress={this.onButtonPress} status={this.state.status} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  main: {
    // flex: 3,
    fontSize: 60,
    textAlign: "center"
  },
  button: {
    // flex: 2,
  }
});
