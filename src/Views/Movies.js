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
import { MovieCard } from '../Components/MovieCard'
import { NavBar } from '../Components/NavBar'

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
                            return <MovieCard movieResult={movieResult} />
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
            <NavBar navigation={navigation} />
        </View>
    )
}
export default Movies
