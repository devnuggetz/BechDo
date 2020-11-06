import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

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
        backgroundColor: "#fc5c65",
        position: "absolute",
        top: 40,
        left: 30
    },
    container:{
        flex: 1,
        backgroundColor: '#000'
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#4ecdc4",
        position: "absolute",
        top: 40,
        right: 30
    },
})
