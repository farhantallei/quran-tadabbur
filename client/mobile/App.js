import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './src/routes/HomeStack'
import ProfileStack from './src/routes/ProfileStack'

const Tab = createBottomTabNavigator()

function AppContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ presentation: 'modal', headerShown: false }}>
                <Tab.Screen name="HomeStack" component={HomeStack} />
                <Tab.Screen name="ProfileStack" component={ProfileStack} />
            </Tab.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    )
}

export default class App extends React.Component {
    render () {
        return (
            <AppContainer />
        )
    }
}
