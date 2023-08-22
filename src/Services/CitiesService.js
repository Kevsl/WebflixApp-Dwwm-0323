import axios from 'axios'

export async function getCities(city) {
    return axios
        .get(
            `https://api-adresse.data.gouv.fr/search/?q=${city}&type=municipality`
        )
        .then((res) => {
            return res.data.features
        })
}
