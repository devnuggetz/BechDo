import React, { Children } from 'react'
import { View, Text } from 'react-native'

export default function AppText({Children}) {
    return (
        <Text style={styles.text}>{Children}</Text>
    )
}
