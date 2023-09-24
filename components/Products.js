import {
	View,
	Text,
	StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native"
import React, { useState } from "react"

const Products = ({ name, deleteFunction, idString }) => {
	const [check, setCheck] = useState(false)
	return (
			<View style={styles.items}>
				{!check ? (
					<Text style={[styles.element]}>{name}  </Text>
				): (
					<Text style={[styles.element, styles.textLine]}>{name}  </Text>
				)}
				
				<TouchableOpacity activeOpacity={ 0.6} style={{backgroundColor:'lightgreen',paddingHorizontal: 15, height:100, justifyContent:"center"}} onPress={()=> setCheck(!check)}>
					<Text style={{fontSize:20}}>&#10003;</Text>
					</TouchableOpacity>
				<TouchableOpacity activeOpacity={ 0.6}  onPress={() =>deleteFunction(idString)} style={{backgroundColor:'lightcoral',paddingHorizontal: 20, height:100, justifyContent:"center"}}>
					<Text style={{fontSize:20}}>&#x2717;</Text>
					</TouchableOpacity>
			</View>
	)
}
const styles = StyleSheet.create({
	items: {
		flexDirection:'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
		backgroundColor: "lightblue"
	},
	element: {
		flexGrow:1,
		marginVertical: 5,
		padding: 20,
		fontSize: 18,

		
	},
	textLine:{
		textDecorationLine:'line-through',
	}
})
export default Products
