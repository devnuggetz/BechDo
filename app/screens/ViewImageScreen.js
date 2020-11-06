import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'

const ViewImageScreen = () => {
    return (
        <View
        style={styles.container}
        >
            <View
            style={styles.closeIcon}
            ></View>
            <View
            style={styles.deleteIcon}
            ></View>
            <Image 
            resizeMode="contain"
            style={styles.image}
            source={require('../assets/chair.png')}/>
        </View>
    )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: "100%"
    },
    closeIcon:{
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30
    },
    container:{
        flex: 1,
        backgroundColor: colors.black,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30
    },
})
