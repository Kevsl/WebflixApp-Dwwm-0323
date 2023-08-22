import { View, Text, TouchableOpacity } from 'react-native'
import { NavBar } from '../Components/NavBar'

const Home = ({ navigation }) => {
    return (
        <View style={{ height: '100%' }}>
            <Text>Home</Text>
            <Text>Je suis dans la page Home</Text>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('cities')
                }}
            >
                <Text>Aller vers Cities</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('pictures')
                }}
            >
                <Text>Aller vers Pictures</Text>
            </TouchableOpacity>
            <NavBar navigation={navigation} />
        </View>
    )
}
export default Home
