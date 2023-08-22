import { View, Text, TouchableOpacity } from 'react-native'
import { CityCardStyle } from '../Styles/Components/Citycard'
import { getWeather } from '../Services/CitiesService'
import { useState } from 'react'

export const CityCard = ({ city, setTemperature }) => {
    function handleWeather() {
        getWeather(
            city.geometry.coordinates[1],
            city.geometry.coordinates[0]
        ).then((res) => {
            setTemperature(res.current_weather.temperature)
        })
    }

    return (
        <View style={CityCardStyle.cityCard} key={city.properties.id}>
            <TouchableOpacity
                onPress={() => {
                    handleWeather()
                }}
            >
                <Text style={CityCardStyle.cityTitle} numberOfLines={1}>
                    {city.properties.city}
                </Text>
                <Text>Code postal: {city.properties.postcode}</Text>
                <Text>Population: {city.properties.population}</Text>
                <Text>Population: {}</Text>
            </TouchableOpacity>
        </View>
    )
}
