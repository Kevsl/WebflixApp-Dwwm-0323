import { View, Text } from 'react-native'
import { CityCardStyle } from '../Styles/Components/Citycard'

export const CityCard = ({ city }) => {
    return (
        <View style={CityCardStyle.cityCard} key={city.properties.id}>
            <Text style={CityCardStyle.cityTitle} numberOfLines={1}>
                {city.properties.city}
            </Text>
            <Text>Code postal: {city.properties.postcode}</Text>
            <Text>Population: {city.properties.population}</Text>
            <Text>{citySearched}</Text>
        </View>
    )
}
