import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItems = ({image, title, subtitle, onPress, renderRightActions, IconComponent}) => {
    return (
        <Swipeable
            renderRightActions={renderRightActions}
        >
            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}>
            <View style={styles.container}>
            {IconComponent}
            {image && <Image 
            style={styles.image}
            source={image}/>}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subtitle&&<AppText style={styles.subtitle}>{subtitle}</AppText>}
            </View>
             </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

export default ListItems

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white

    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent:'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "500"
    },
    subtitle: {
        color: colors.medium
    }
})
