import React from 'react'
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import ListItems from '../components/ListItems'


const messages= [
    {
        id: 1,
        title: 't1',
        description: "t1",
        image: require('../assets/avatar.png')
    },
    {
        id: 2,
        title: 't2',
        description: "t2",
        image: require('../assets/avatar.png')
    },
]
const MessagesScreen = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
            data={messages}
            keyExtractor={message=>message.id.toString()}
            renderItem={({item})=><ListItems 
            title={item.title}
            subtitle={item.description}
            image={item.image}
            />}
        />
        </SafeAreaView>   
    )
}

export default MessagesScreen

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight :0
    }
})
