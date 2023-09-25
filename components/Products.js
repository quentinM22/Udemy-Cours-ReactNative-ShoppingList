import {
	View,
	Text,
	StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from "react-native"
import React, { useState } from "react"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Color from '../constants/colors'

const Products = ({ name, deleteFunction, idString }) => {
	const [check, setCheck] = useState(false)
	return (
			<View style={styles.items}>
				<TouchableOpacity activeOpacity={ 0.6} style={{paddingHorizontal: 15, height:100, justifyContent:"center"}} onPress={()=> setCheck(!check)}>
				<FontAwesome name="check-square-o" size={30}  color={Color.success} />
					</TouchableOpacity>
				{!check ? (
					<Text style={[styles.element]}>{name}</Text>
				): (
					<Text style={[styles.element, styles.textLine]}>{name} </Text>
				)}
					
				<TouchableOpacity activeOpacity={ 0.6}  onPress={() =>deleteFunction(idString)} style={{paddingHorizontal: 20, height:100, justifyContent:"center"}}>
					<FontAwesome name='remove' size={30} color={Color.danger} />
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
		backgroundColor: Color.info
	},
	element: {
		flexGrow:1,
		marginVertical: 5,
		padding: 20,
		fontSize: 18,
		fontFamily: 'roboto-bold'
	},
	textLine:{
		textDecorationLine:'line-through',
		color: Color.success
	},
})
export default Products
