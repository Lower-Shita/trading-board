maptilersdk.config.apiKey = 'l3GsRwPIhKwohXEfLiOC'

const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: 'https://api.maptiler.com/maps/0195e344-ae50-7f33-bc1b-46535907fbab/style.json?key=l3GsRwPIhKwohXEfLiOC',
})

// Chargement des pays interactifs
map.on('load', () => {
    // Gestion des pays
    map.addSource('countries', {
        type: 'geojson',
        data: './data/countries.geojson'
    })

    map.addLayer({
        id: 'countries-clickable',
        type: 'fill',
        source: 'countries',
        paint: {
            'fill-color': '#000000',
            'fill-opacity': 1
        }
    })
})
