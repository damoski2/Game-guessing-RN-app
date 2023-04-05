import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/colors'

const NumberContainer = ({ children }) => {

  const {  container, numberText } = styles;

  return (
    <View style={container} >
        <Text style={numberText} >{children}</Text>
    </View>
  )
}

export default NumberContainer;


const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
       borderWidth: 2,
       borderColor: Colors.accent500,
       padding: deviceWidth < 380 ? 12 : 24,
       margin: deviceWidth < 380 ? 12 : 24,
       borderRadius: 8,
       alignItems: 'center',
       justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold',
    }
})