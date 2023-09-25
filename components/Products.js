import {
	View,
	Text,
	StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from "react-native"
import React, { useState } from "react"
import Color from '../constants/colors'

const Products = ({ name, deleteFunction, idString }) => {
	const [check, setCheck] = useState(false)
	return (
			<View style={styles.items}>
				{!check ? (
					<Text style={[styles.element]}>{name}</Text>
				): (
					<Text style={[styles.element, styles.textLine]}>{name}  </Text>
				)}
				
				<TouchableOpacity activeOpacity={ 0.6} style={{paddingHorizontal: 15, height:100, justifyContent:"center"}} onPress={()=> setCheck(!check)}>
				<Image 
					source={require('../assets/check.png')}
					style={styles.tinyLogo}
					/>
					</TouchableOpacity>
				<TouchableOpacity activeOpacity={ 0.6}  onPress={() =>deleteFunction(idString)} style={{paddingHorizontal: 20, height:100, justifyContent:"center"}}>
					{/* <Text style={{fontSize:20}}>&#x2717;</Text> */}
					<Image 
					source={require('../assets/cross.png')}
					style={styles.tinyLogo}
					/>
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
	},
	tinyLogo: {
		width: 30,
		height: 30,
		padding: 10
	  },
})
export default Products
