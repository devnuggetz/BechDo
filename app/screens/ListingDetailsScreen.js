import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ListingDetailsScreen = () => {
    return (
        <View>
            <Image 
            style={styles.image}
            source={require('../assets/dress.png')}
            />
        </View>
    )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    }
})
