import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen'
import Card from '../components/Card'

const listings=[
    {
        id: 1,
        title: 'New Dress for Sale',
        price: '1770',
        image: require('../assets/dress.png'),
    },
    {
        id: 2,
        title: 'New Book for Sale',
        price: '1770',
        image: require('../assets/book.png'),
    }
]
const ListingsScreen = () => {
    return (
       <Screen>
           <FlatList 
            data={listings}
            keyExtractor={listing=> listing.id.toString()}
            renderItem={({item})=>
                <Card 
                    title={item.title}
                    subtitle={'₹' + item.price}
                    image={item.image}
                />
            }
           />
       </Screen>
    )
}

export default ListingsScreen

const styles = StyleSheet.create({})
