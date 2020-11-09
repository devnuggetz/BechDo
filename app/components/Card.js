import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

const Card = ({title, subtitle, image}) => {
    return (
        <View style={styles.card}>
            <Image  
            style={styles.image}
            source={require(image)}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText>{subtitle}</AppText>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        marginBottom: 7
    },
})
