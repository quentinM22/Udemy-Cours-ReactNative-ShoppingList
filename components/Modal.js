import { View, Text, Button, Modal, StyleSheet } from 'react-native'
import React from 'react'

const ModalDelete = ({toggle, setToggle, setMyProduct}) => {
    const handlerDelete = () => {
        setMyProduct([])
        setToggle(false)
    }
  return (
 <Modal
     animationType="slide"
     hardwareAccelerated = {true}
     transparent = {true}
     visible={toggle}
     onRequestClose={()=> setToggle(true)}>
     <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Text style={{fontSize: 18}}>Voulez-vous tout supprimer?</Text>
        <View style={styles.btnModalContainer}>
        <Button title='Oui' onPress={handlerDelete} color={'lightgreen'}/>
        <Button title='Non' onPress={()=> setToggle(false)} color={'lightcoral'}/>
        </View>
        </View>
     </View>
     </Modal>   
    
  )
}
const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
        
    },
    modalContent:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 15
    },
    btnModalContainer:{
        width:100,
        marginVertical: 25,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around'
    }
})
export default ModalDelete