import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import useStyles from './styles'

const Chapter = props => {
    const styles = useStyles()

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
                <Text>Chapter Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default Chapter
