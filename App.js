import { useEffect, useState } from "react"
import {
  Alert,
  Button,
  FlatList,
	StyleSheet,
	Text,
	View
} from "react-native"

import Products from "./components/Products"
import AddProducts from "./components/AddProducts"
import ModalDelete from "./components/Modal"

export default function App() {
	const [myProducts, setMyProduct] = useState([])
  const [error, setError] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [deleteDis, setDeletedis] =  useState(true)
  const submitHandler = (product) => {
    if(product.length >= 2 && product.length <= 14 ){
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
	return (
		<View style={styles.container}>
      <ModalDelete 
        toggle={toggle}
        setToggle={setToggle}
        setMyProduct={setMyProduct}
      />
      <Text style={styles.title}>ShoppingList</Text>
        <AddProducts submitHandler={submitHandler} error={error} />
        <Button title="Supprimer Tout" onPress={() => setToggle(true)} disabled={deleteDis} color={"lightcoral"}/>
        <FlatList
          data={myProducts}
          renderItem={({item})=> 
        <Products 
        name={item.name} 
        deleteFunction={deleteFunction}
        idString={item.key}
        /> } />
		</View>
	)
}

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    textAlign: 'center',
    margin: 15,
    color: 'lightblue',
    fontWeight: 'bold'
  },
	container: {
		padding: 40,
		paddingTop: 60,
    marginBottom: 60,
	},
	intputContainer: {
		flexDirection: "row",
    marginBottom: 10
	},
	textInput: {
		borderColor: "gray",
		borderWidth: 1,
		padding: 5,
		paddingHorizontal: 9,
		fontSize: 18,
		flexGrow: 1,
	},
	items: {
		marginTop: 10,
	},
	element: {
		marginVertical: 5,
		padding: 20,
		fontSize: 18,
		backgroundColor: "lightblue",
	},
})
