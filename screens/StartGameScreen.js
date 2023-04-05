import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  const {
    numberInput,
    buttonsContainer,
    buttonContainer,
    rootContainer,
    intructionText,
    screen

  } = styles;

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };

  const marginTopDistance = height < 480 ? 30 : 100;

  return (
  <ScrollView style={screen} >
      <KeyboardAvoidingView style={screen} behavior="position" >
      <View style={[rootContainer, { marginTop: marginTopDistance }]}>
        <Title>Guess My Number</Title>
        <Card>
          <InstructionText>Enter a Number</InstructionText>
          <TextInput
            style={numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
          <View style={buttonsContainer}>
            <View style={buttonContainer}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={buttonContainer}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
  </ScrollView>
  );
};

export default StartGameScreen;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },
});
