import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'



const Title = ({ children }) => {
  const { title } =  styles;

  return (
    <Text style={title} >{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        //borderWidth: Platform.OS === 'android' ? 2 : 0 ,
        //borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        width: 300,
        maxWidth: '80%',
    }
})