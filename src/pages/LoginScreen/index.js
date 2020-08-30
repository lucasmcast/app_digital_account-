import React from 'react'
import { View, Image, StatusBar} from 'react-native'
import styles from './styles'
import { womanLogin } from '../../../res/imagesLogin'
import WelcomeLogin from './WelcomeLogin'
import Login from './Login'
import FooterLogin from './FooterLogin'

function LoginScreen({navigation}) {
    return (
        <View style={styles.containerLogin}>
            <StatusBar backgroundColor={"#e63888"}></StatusBar>
            <Image style={styles.imageWoman}
                source={womanLogin}>
            </Image>
            <WelcomeLogin></WelcomeLogin>
            <Login 
                onPress={()=>{ navigation.navigate("Main")}}
            ></Login>
            <FooterLogin></FooterLogin>
        </View >
    )
}

export default LoginScreen;