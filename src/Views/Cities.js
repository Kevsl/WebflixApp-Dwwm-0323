import { useEffect, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    ActivityIndicator,
    SectionList,
    Image,
} from 'react-native'
import { getCities } from '../Services/CitiesService'
import { CitiesStyle } from '../Styles/CitiesStyle'
import { CityCard } from '../Components/CityCard'
import { Loader } from '../Components/Loader'

import Geolocation from '@react-native-community/geolocation'
import { NavBar } from '../Components/NavBar'

const Cities = ({ navigation }) => {
    const [citySearched, setCitySearched] = useState('')
    const [citiesList, setCitiesList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [temperature, setTemperature] = useState(120)

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

    Geolocation.getCurrentPosition((info) => {
        console.log(info)
        setLatitude(info.coords.latitude)
        setLongitude(info.coords.longitude)
    })

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
                            return (
                                <CityCard
                                    city={city}
                                    setTemperature={setTemperature}
                                />
                            )
                        })}
                </View>
            </ScrollView>
            <View style={CitiesStyle.temperatureContainer}>
                {temperature < 0 ? (
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFdpbnRlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60',
                        }}
                        style={CitiesStyle.temperatureImage}
                    />
                ) : temperature >= 0 && temperature < 25 ? (
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJpbnRlbXBzfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60',
                        }}
                        style={CitiesStyle.temperatureImage}
                    />
                ) : (
                    temperature >= 25 &&
                    temperature !== 120 && (
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90JTIwc3VtbWVyfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60',
                            }}
                            style={CitiesStyle.temperatureImage}
                        />
                    )
                )}
                {temperature !== 120 && (
                    <Text style={CitiesStyle.temperature}>{temperature}°C</Text>
                )}
            </View>
            <View style={CitiesStyle.gpsContainer}>
                <Text style={CitiesStyle.gpsData}>{latitude}</Text>
                <Text style={CitiesStyle.gpsData}>{longitude}</Text>
            </View>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('movies')
                }}
            >
                <Text>Aller vers Movies</Text>
            </TouchableOpacity>
            <NavBar navigation={navigation} />
        </View>
    )
}
export default Cities
