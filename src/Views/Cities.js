import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { getCities } from '../Services/CitiesService'

const Cities = ({ navigation }) => {
    const [citySearched, setCitySearched] = useState('')
    const [citiesList, setCitiesList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleCitySearch() {
        getCities(citySearched).then((res) => {
            setCitiesList(res)
        })
    }

    useEffect(() => {
        if (citySearched.length > 2) {
            handleCitySearch()
        }
    }, [citySearched])

    return (
        <View>
            <Text> Rechercher une ville </Text>

            <TextInput onChangeText={setCitySearched} />

            {citiesList &&
                citiesList.length > 0 &&
                citiesList.map((city) => {
                    return (
                        <View key={city.properties.id}>
                            <Text>{city.properties.label}</Text>
                        </View>
                    )
                })}

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('movies')
                }}
            >
                <Text>Aller vers Movies</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Cities
