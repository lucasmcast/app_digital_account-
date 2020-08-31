import React from 'react';
import { View, TouchableOpacity, Image, Text, ImagePropTypes } from 'react-native'
import styles from './styles'
import { conta } from '../../../../res/data'
import Icon from 'react-native-vector-icons/MaterialIcons';

function MenuItems(props) {
    return (
        <View>
            <View style={styles.containerInfo}>
                <Image style={styles.imagePerfil} source={{ uri: conta.foto }}></Image>
            </View>
            <View>
                <TouchableOpacity style={styles.containerItemMenu}>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <Text style={styles.textItem}>Me ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerItemMenu}>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <Text style={styles.textItem}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerItemMenu}>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <Text style={styles.textItem}>Configurações do app</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                onPress={()=> props.navigation.navigate("Login")}
                style={styles.buttonSair}>
                <Text style={styles.textButton}>SAIR DO APP</Text>
            </TouchableOpacity>
        </View>

    )

}

export default MenuItems;