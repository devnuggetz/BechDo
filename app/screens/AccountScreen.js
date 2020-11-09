import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Icon from '../components/Icon'
import ListItems from '../components/ListItems'
import Screen from '../components/Screen'
import colors from '../config/colors'


const menuItems=[
    {
        title: 'Menu Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }
]
const AccountScreen = () => {
    return (
        <Screen>
            <View style={styles.conatainer}>
                <ListItems
                    title='Drake Drake'
                    subtitle='drakeitis@drake.com'
                    image={require('../assets/avatar.png')}
                />
            </View>
            <View style={styles.conatainer}>
                <FlatList 
                data={menuItems}
                keyExtractor={menuItem=>menuItem.title}
                renderItem={({item})=>
                    <ListItems 
                        title={item.title}
                        ImageComponent={
                            <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                        }
                    />
                }
                />
            </View>
            
        </Screen>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    conatainer: {
        marginVertical: 20
    }
})
