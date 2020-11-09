import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'

function WelcomeScreen(props) {
    return (
            <ImageBackground
            source={require("../assets/background.png")}
            style={styles.background}
            blurRadius={8}
            >   
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../assets/trade.png')} />
                    <Text style={styles.tagline}>Sell anything. Anywhere</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <AppButton title="Login" />
                    <AppButton title="Register" color='secondary'/>
                </View>
            </ImageBackground>

    )
}

const styles = StyleSheet.create({
    logo:{
        width:100,
        height: 100,
    },
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    tagline: {
        fontSize: 25,
        fontWeight: 600,
        paddingVertical: 20
    }
})



export default WelcomeScreen
