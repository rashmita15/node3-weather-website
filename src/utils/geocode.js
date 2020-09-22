const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmFzaG1pdGFwIiwiYSI6ImNrZW15bTlkZzBvbmEzM284eG5qdGoxMXQifQ.62b1pC5cDXBJFrJ-3fDhaw&limit=1'

    request({ url, json: true }, (error, response) => {
        const {features} = response.body
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (features.length === 0) {
            callback('There are no matching results for the query', undefined)
        } else {
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            })
        }
    })
}

module.exports = geoCode;