import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import useStyles from './styles'

const Profile = props => {
    const styles = useStyles()
    const navigation = props.navigation

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default Profile
