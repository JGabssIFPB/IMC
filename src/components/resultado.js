import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Resultado = (valores) => {
  return (
    <View>
      <Text>{valores.mensagemResultadoIMC}</Text>
      <Text>{valores.resultadoIMC}</Text>
    </View>
  )
}

export default Resultado

const styles = StyleSheet.create({})