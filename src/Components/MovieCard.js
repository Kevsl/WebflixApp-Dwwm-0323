import { Image, Text, View } from 'react-native'
import { MovieCardStyle } from '../Styles/Components/MovieCard'

export const MovieCard = ({ movieResult }) => {
    return (
        <View key={movieResult.imdbID} style={MovieCardStyle.movieCard}>
            <Image
                source={{ uri: movieResult.Poster }}
                style={MovieCardStyle.moviePoster}
            />
            <Text style={MovieCardStyle.movieTitle}>{movieResult.Title}</Text>
        </View>
    )
}
