import React from 'react'
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import ListItems from '../components/ListItems'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'


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
        <Screen style={styles.screen}>
            <FlatList
            data={messages}
            keyExtractor={message=>message.id.toString()}
            renderItem={({item})=><ListItems 
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={()=> console.log("Your Message is: ", item)}
            />}
            ItemSeparatorComponent={ListItemSeparator}
        />
        </Screen>   
    )
}

export default MessagesScreen

const styles = StyleSheet.create({})
