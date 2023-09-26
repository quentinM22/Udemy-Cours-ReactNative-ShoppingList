import { useEffect, useState } from "react"
import {
  Button,
  FlatList,
	Image,
	StyleSheet,
	Text,
	View
} from "react-native"
import AppLoading from "expo-app-loading"

import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto"

import Products from "./components/Products"
import AddProducts from "./components/AddProducts"
import ModalDelete from "./components/Modal"
import DissMissKeyboard from "./components/DissMissKeyboard"


import Color from './constants/colors'



export default function App() {
	const [myProducts, setMyProduct] = useState([])
  const [error, setError] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [deleteDis, setDeletedis] =  useState(true)
 
  const [fontLoad, errorLoad] = useFonts({
    "RobotoMedium": Roboto_500Medium,
    "roboto-bold": require('./assets/fonts/Roboto-Bold.ttf'),
    "roboto-regular": require('./assets/fonts/Roboto-Regular.ttf'),
    "croissantOne": require('./assets/fonts/CroissantOne-Regular.ttf')
  })

  const submitHandler = (product) => {
    if(product.length >= 2 && product.length <= 15 ){
      const idString = Date.now().toString()
      setMyProduct((currentMyProduct) => [{key: idString, name: product},...currentMyProduct])
      setError(false)
    }else{
      setError(true)
    }
    
	}
  const deleteFunction = (key) =>{
    setMyProduct(currentMyProduct => {
        return currentMyProduct.filter(product => product.key != key)
    })
}
useEffect(() => {
  if (myProducts.length === 0) {
    setDeletedis(true)
  }else{
    setDeletedis(false)
  }
}, [myProducts]);

	return  !fontLoad ? (
  <AppLoading />
  ):(
    <DissMissKeyboard>
		<View  
    style={styles.container}
    >
      <ModalDelete 
        toggle={toggle}
        setToggle={setToggle}
        setMyProduct={setMyProduct}
      />
      <View style={styles.header}> 
      <Text style={styles.title}>ShoppingList</Text>
      <Image 
					source={require('./assets/pngegg.png')}
					style={styles.tinyLogo}
					/>
      </View>
      
        <AddProducts submitHandler={submitHandler} error={error} />
        <Button title="Supprimer Tout" onPress={() => setToggle(true)} disabled={deleteDis} color={Color.danger}/>
        <FlatList
          data={myProducts}
          renderItem={({item})=> 
        <Products 
        name={item.name} 
        deleteFunction={deleteFunction}
        idString={item.key}
        /> } />
		</View>
    </DissMissKeyboard>
	)
}

const styles = StyleSheet.create({
  title:{
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
    margin: 15,
    color: 'skyblue',
    fontFamily: 'croissantOne',
  },
	container: {
		padding: 40,
		paddingTop: 60,
    marginBottom: 5,
    flex: 1,
	},
  header:{
    position: 'relative',
    flexDirection: "row",
    alignItems: "center",
  },
  tinyLogo: {
    position: 'absolute',
		width: 50,
		height: 50,
	  },
})
