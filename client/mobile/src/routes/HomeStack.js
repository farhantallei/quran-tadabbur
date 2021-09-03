import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/stacks/Home/Home'
import Chapter from '../screens/stacks/Home/Chapter'

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Home', cardStyle: { backgroundColor: 'white' } }} />
            <Stack.Screen name="Chapter" component={Chapter} options={{ cardStyle: { backgroundColor: 'white' } }} />
        </Stack.Navigator>
    )
}

export default HomeStack
