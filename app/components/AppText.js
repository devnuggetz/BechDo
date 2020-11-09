import React, { Children } from 'react'
import { View, Text, Platform } from 'react-native'

export default function AppText({Children, style}) {
    return (
        <Text style={[styles.text, style]}>{Children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS ==='android'? "Roboto" : "Avenir"
    }
})
