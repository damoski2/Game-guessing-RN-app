import React from 'react'
import { View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'
import Colors from '../../constants/colors';

const Card = ({ children }) => {

  const { height } = useWindowDimensions()

  const { card } = styles;

  return (
    <View style={card}>
        {children}
      </View>
  )
}

export default Card;


const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: deviceWidth < 380 ? 12 : 18,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        backgroundColor: Colors.primary800,
      },
})