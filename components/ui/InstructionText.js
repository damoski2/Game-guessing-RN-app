import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {

  const { intructionText } = styles;

  return <Text style={[intructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  intructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: 'open-sans',
  },
});
