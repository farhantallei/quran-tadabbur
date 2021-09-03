import React from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'

import useStyles from './styles'

const Home = props => {
    const styles = useStyles()
    const navigation = props.navigation

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title="Chapter" onPress={() => navigation.navigate('Chapter')} />
            </View>
        </SafeAreaView>
    )
}

export default Home
