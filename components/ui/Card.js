import React from 'react'
import { View, StyleSheet } from 'react-native'
import Colors from '../../constants/colors';

const Card = ({ children }) => {

  const { card } = styles;

  return (
    <View style={card}>
        {children}
      </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 36,
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