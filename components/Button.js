import React from "react";
import { StyleSheet, Alert, Button } from "react-native";

export default class PomodoroButton extends React.Component {
  nextStatus;

  handleButtonPress = () => {
    this.props.onButtonPress(this.nextStatus);
  }

  render() {
    let buttonText, accessibilityLabel;
    switch (this.props.status) {
      case "working":
      case "breaking":
        buttonText = "Cancel Pomodoro";
        accessibilityLabel = "Stop the Pomodoro Timer";
        this.nextStatus = "toWork";
        break;
      case "toBreak":
        buttonText = "Break Time!";
        accessibilityLabel = "Start the Break Timer";
        this.nextStatus = "breaking";
        break;
      case "toWork":
      default:
        buttonText = "Pomodoro Time!";
        accessibilityLabel = "Start the Pomodoro Timer";
        this.nextStatus = "working";
        break;
    }
    return (
      <Button
        onPress={this.handleButtonPress}
        title={buttonText}
        accessibilityLabel={accessibilityLabel}
      />
    );
  }
}
