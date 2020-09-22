const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b0d4d03aac49d9c146cba100d04f8f08&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, response) => {
        const {error: forecastError, current} = response.body
        if (error) {
            callback('Unable to connect to the internet!', undefined)
        } else if (forecastError) {
            callback('Incorrect coordinates selected', undefined);
        } else {
            const temp = current.temperature;
            const feelsLikeTemp = current.feelslike;
            callback(undefined, current.weather_descriptions[0] + '. It is currently ' + temp + ' degrees out. It feels like ' + feelsLikeTemp + ' degrees out. ')
        }
    })
}

module.exports = forecast;
