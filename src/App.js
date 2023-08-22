/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Views/Home'
import Cities from './Views/Cities'
import Movies from './Views/Movies'
import Pictures from './Views/Pictures'

function App() {
    const Stack = createNativeStackNavigator()

    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="home"
                        component={Home}
                        options={{
                            animation: 'slide_from_left',
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="cities"
                        component={Cities}
                        options={{
                            animation: 'slide_from_left',
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="movies"
                        component={Movies}
                        options={{
                            animation: 'slide_from_left',
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="pictures"
                        component={Pictures}
                        options={{
                            animation: 'slide_from_left',
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default App
