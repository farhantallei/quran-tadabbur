import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Profile from '../screens/stacks/Profile/Profile'

const Stack = createStackNavigator()

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{ title: 'Home', cardStyle: { backgroundColor: 'white' } }} />
        </Stack.Navigator>
    )
}

export default ProfileStack
