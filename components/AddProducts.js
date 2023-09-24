import { View, StyleSheet, TextInput, Button, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const AddProducts = ({submitHandler, error}) => {
    const [product, setProduct] = useState('')
    const [btnDis, setBtnDis] = useState(true)
    const inputHandler = (val) => {
		setProduct(val)
	}
	
const handlePress = () => {
    submitHandler(product)
    setProduct('')
}
useEffect(() => {
    if (product.length >= 2 && product.length <= 15) {
        setBtnDis(false)
    }else{
        setBtnDis(true)
    }
}, [product]);
  return (
    <View >
    <View style={styles.intputContainer}>
         <TextInput
         multiline
         maxLength={15}
        style={[styles.textInput, error ? styles.errorBorderColor : styles.defaultBorderColor ]}
        placeholder="Nouveau Produit"
        onChangeText={inputHandler}
        value={product}
    />
    <Button title="Valider" onPress={handlePress} color={ btnDis ?  "lightgray" : "#add8e6"} disabled={btnDis}/>
    </View>
</View>
  )
}
const styles = StyleSheet.create({
	intputContainer: {
		flexDirection: "column",
    marginBottom: 10
	},
	textInput: {
		borderWidth: 1,
		padding: 5,
		paddingHorizontal: 9,
		fontSize: 18,
		flexGrow: 1,
        backgroundColor: 'white'
	},
    errorBorderColor:{
        borderColor: 'lightcoral'
    },
    defaultBorderColor:{
        borderColor: 'lightgray'
    },
    msgError:{
        color: 'lightcoral',
        fontSize: 10,
        fontWeight: 'bold'
    },
})

export default AddProducts