import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const {
    imageContainer,
    image,
    rootContainer,
    summaryText,
    highlight,
    screen,
  } = styles;

  const { height, width } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 480) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: Math.round(imageSize / 2),
  };

  let maxImageWidthHeight = height < 480 ? 150 : 300;
  let maxImageRadius = height < 480 ? 75 : 150;

  return (
    <ScrollView style={screen}>
      <View style={rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[imageContainer, imageStyle]}>
          <Image
            style={image}
            source={require("../assets/images/gameover.png")}
          />
        </View>
        <Text style={summaryText}>
          Your phone needed <Text style={highlight}>{roundsNumber}</Text> rounds
          to guess the number <Text style={highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    /* borderRadius: deviceWidth < 380 ? 75: 150,
    width:  deviceWidth < 380 ? 150: 300,
    height: deviceWidth < 380 ? 150: 300, */
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: deviceWidth < 380 ? 18 : 22,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
