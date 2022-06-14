import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";


const PrimaryButton = ({ children, onPress }) => {
  const { buttonOuterCountainer, buttonInnerContainer, buttonText, pressedStyle } =
    styles;


  return (
    <View style={buttonOuterCountainer}>
      <Pressable
        style={({ pressed })=> pressed? [buttonInnerContainer,pressedStyle] : buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterCountainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressedStyle: {
    opacity: 0.75,
  },
});
