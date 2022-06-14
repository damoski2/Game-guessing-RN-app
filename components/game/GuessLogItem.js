import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors';

const GuessLogItem = ({ roundNumber, guess }) => {

  const { listItem, itemText } = styles;

  return (
    <View style={listItem} >
        <Text style={itemText} >#{roundNumber}</Text>
        <Text style={itemText} >Opponent's Guess: {guess}</Text>
    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem:{
        borderColor: Colors.primary800,
        borderWidth: 1,
        padding: 12,
        marginVertical: 8,
        borderRadius: 40,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans',
    }
})