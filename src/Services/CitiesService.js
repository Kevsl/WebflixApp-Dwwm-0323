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

export async function getWeather(latitude, longitude) {
    return axios
        .get(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
        )
        .then((res) => {
            return res.data
        })
}
