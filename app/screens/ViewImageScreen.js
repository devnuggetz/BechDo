import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ViewImageScreen = () => {
    return (
        <View
        style={styles.container}
        >
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
    container:{
        flex: 1,
        backgroundColor: '#000'
    }
})
