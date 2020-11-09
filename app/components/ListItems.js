import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

const ListItems = ({image, title, subtitle, onPress}) => {
    return (
        <TouchableHighlight 
        underlayColor={colors.light}
        onPress={onPress}>
            <View style={styles.container}>
            <Image 
            style={styles.image}
            source={image}/>
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
             </View>
        </TouchableHighlight>
    )
}

export default ListItems

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    title: {
        fontWeight: "500"
    },
    subtitle: {
        color: colors.medium
    }
})
