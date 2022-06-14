import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { imageContainer, image, rootContainer, summaryText, highlight } = styles;

  return (
    <View style={rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={imageContainer}>
        <Image
          style={image}
          source={require("../assets/images/gameover.png")}
        />
      </View>
      <Text style={summaryText} >
        Your phone needed <Text style={highlight} >{roundsNumber}</Text> rounds to guess the number{" "}
        <Text style={highlight} >{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame} >
        Start New Game
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
});
