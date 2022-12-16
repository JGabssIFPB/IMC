import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Titulo = () => {
  return (
    <View>
      <Text style={styles.fontBlue}>IMC</Text>
    </View>
  )
}

export default Titulo

const styles = StyleSheet.create({
  fontBlue: {
    color: '#001110',
    fontWeight: 'bold',
    fontSize: 30,
  }
})