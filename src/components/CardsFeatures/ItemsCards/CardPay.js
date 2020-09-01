import React from 'react'
import styles from '../styles'
import {Image, TouchableOpacity, Text} from 'react-native'
import {icon_pay} from '../../../../res/icon_card'

function CardPay({navigation}){
    return(
        <TouchableOpacity 
            style={styles.containerItemsCards}
            onPress={()=> navigation.navigate("PaymentScreen")}
        >
            <Image style={styles.imageItemsCards}source={icon_pay}></Image>
            <Text style={styles.textItemsCards}>Pagar</Text>
        </TouchableOpacity>
    )
}

export default CardPay;