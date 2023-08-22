import axios from 'axios'

export async function movieSearcher(searchValue) {
    return axios
        .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=c6c2a5e9`)
        .then((res) => {
            return res.data
        })
}
