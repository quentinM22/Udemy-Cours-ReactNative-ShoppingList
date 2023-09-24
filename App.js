import { useEffect, useState } from "react"
import {
  Alert,
  Button,
  FlatList,
	ImageBackground,
	StyleSheet,
	Text,
	View
} from "react-native"

import Products from "./components/Products"
import AddProducts from "./components/AddProducts"
import ModalDelete from "./components/Modal"
import DissMissKeyboard from "./components/DissMissKeyboard"

export default function App() {
	const [myProducts, setMyProduct] = useState([])
  const [error, setError] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [deleteDis, setDeletedis] =  useState(true)

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
	return (
    <DissMissKeyboard>
		<ImageBackground 
    style={styles.container}
    source={require('./assets/background-630129_1280.jpg')}
    >
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
		</ImageBackground>
    </DissMissKeyboard>
	)
}

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    textAlign: 'center',
    margin: 15,
    color: 'skyblue',
    fontWeight: 'bold'
  },
	container: {
		padding: 40,
		paddingTop: 60,
    marginBottom: 60,
    flex: 1,
	}
})
