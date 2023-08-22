import camera from '../Assets/images/camera.png'
import home from '../Assets/images/HomeIcon.png'
import city from '../Assets/images/CityIcon.png'
import movie from '../Assets/images/MovieIcon.png'
import { NavBarStyle } from '../Styles/Components/Navbar'
import { View, TouchableOpacity, Image } from 'react-native'

export const NavBar = ({ navigation }) => {
    return (
        <View style={NavBarStyle.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('home')
                }}
            >
                <Image source={home} style={NavBarStyle.icon} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('cities')
                }}
            >
                <Image source={city} style={NavBarStyle.icon} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('movies')
                }}
            >
                <Image source={movie} style={NavBarStyle.icon} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('pictures')
                }}
            >
                <Image source={camera} style={NavBarStyle.icon} />
            </TouchableOpacity>
        </View>
    )
}
