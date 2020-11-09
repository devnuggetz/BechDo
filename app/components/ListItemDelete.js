import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

const ListItemDelete = () => {
    return (
        <View style={styles.container}>
        </View>
    )
}

export default ListItemDelete

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70
    }
})
