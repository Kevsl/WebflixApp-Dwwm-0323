import { useEffect, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    ActivityIndicator,
    SectionList,
} from 'react-native'
import { getCities } from '../Services/CitiesService'
import { CitiesStyle } from '../Styles/CitiesStyle'
import { CityCard } from '../Components/CityCard'
import { Loader } from '../Components/Loader'

const Cities = ({ navigation }) => {
    const [citySearched, setCitySearched] = useState('')
    const [citiesList, setCitiesList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleCitySearch() {
        setIsLoading(true)
        getCities(citySearched).then((res) => {
            setCitiesList(res)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        if (citySearched.length > 2) {
            handleCitySearch()
        }
    }, [citySearched])

    return (
        <View style={CitiesStyle.container}>
            <Text style={CitiesStyle.title}> Rechercher une ville </Text>
            <TextInput
                style={CitiesStyle.searchInput}
                onChangeText={setCitySearched}
                placeholder="Nom de la ville à rechercher"
            />
            {isLoading && <Loader />}

            <ScrollView>
                <View style={CitiesStyle.cityContainer}>
                    {citiesList &&
                        citiesList.length > 0 &&
                        citiesList.map((city) => {
                            return <CityCard city={city} />
                        })}
                </View>
            </ScrollView>

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
