import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
} from 'react-native'
import { MoviesStyle } from '../Styles/MoviesStyle'
import searchIcon from '../Assets/images/SearchIcon.png'
import React, { useState, useEffect } from 'react'
import { movieSearcher } from '../Services/MoviesService'

const Movies = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState('')
    const [moviesResults, setMoviesResults] = useState([])
    const [totalResults, setTotalResults] = useState(0)

    function handleMoviesFetch() {
        movieSearcher(searchValue).then((res) => {
            setTotalResults(res.totalResults)
            setMoviesResults(res.Search)
        })
    }

    return (
        <View style={MoviesStyle.container}>
            <Text style={MoviesStyle.title}>Webflix</Text>
            <View style={MoviesStyle.searchModule}>
                <TextInput
                    style={MoviesStyle.searchInput}
                    placeholder="Trouver un film"
                    onChangeText={setSearchValue}
                />
                <TouchableOpacity
                    style={MoviesStyle.searchButton}
                    onPress={() => {
                        handleMoviesFetch()
                    }}
                >
                    <Image source={searchIcon} style={MoviesStyle.searchIcon} />
                </TouchableOpacity>
            </View>

            {totalResults > 0 && (
                <View>
                    <Text style={MoviesStyle.totalResults}>
                        {totalResults} Résultats
                    </Text>
                </View>
            )}
            <ScrollView>
                <View style={MoviesStyle.movieContainer}>
                    {moviesResults &&
                        moviesResults.length > 0 &&
                        moviesResults.map((movieResult) => {
                            return (
                                <View
                                    key={movieResult.imdbID}
                                    style={MoviesStyle.movieCard}
                                >
                                    <Image
                                        source={{ uri: movieResult.Poster }}
                                        style={MoviesStyle.moviePoster}
                                    />
                                    <Text style={MoviesStyle.movieTitle}>
                                        {movieResult.Title}
                                    </Text>
                                </View>
                            )
                        })}
                </View>
            </ScrollView>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('home')
                }}
            >
                <Text>Aller vers Home</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Movies
