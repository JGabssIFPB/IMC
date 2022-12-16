import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import Resultado from './resultado'


const Formulario = () => {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [mensagemIMC, setMensagemIMC] = useState('Informe os dados')
  const [IMC, setIMC] = useState(null)

  const [textoBotao, setTextBotao] = useState('Calcular')

  function calcularIMC() {
    const imc = (peso /altura ** 2).toFixed(2)
    setIMC(imc)

    if (imc < 18.5) {
      setMensagemIMC("Abaixo do peso")
    } else if (imc < 25) {
      setMensagemIMC("Peso normal")
    } else if (imc < 30) {
      setMensagemIMC("Sobrepeso")
    } else if (imc < 35) {
      setMensagemIMC("Obesidade grau I")
    } else if (imc < 40 ) {
      setMensagemIMC("Obesidade grau II")
    } else {
      setMensagemIMC("Obesidade grau III")
    }
  }

  return (
    <View>
      <View>

        <Text>
            Altura (m)
        </Text>
        <TextInput
        placeholder='Ex: 1.72'
        keyboardType='numeric'
        onChangeText={(altura => setAltura(altura))}
        value={altura}
        />

        <Text>
            Peso (kg)
        </Text>
        <TextInput
        placeholder='Ex: 80.2'
        keyboardType='numeric'
        onChangeText={(peso => setPeso(peso))}
        value={peso}
        />
        <Button style={styles.buttomColor} title="Calcular" onPress={() => {calcularIMC()}}/>
      </View>
      <Resultado mensagemResultadoIMC={mensagemIMC} resultadoIMC={IMC}/>
    </View>
  )
}

export default Formulario

const styles = StyleSheet.create({
  buttomColor: {
    color: "#fff",
    backgroundColor: '#3070c7',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Arial',
    paddingBottom: 5,
    paddingTop: 5,

     
  }
})