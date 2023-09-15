import { getElement } from './helpers.js'
import { STATE } from './state.js'
import { dataService } from './dataService.js'
import { Forecast } from './forecast.js'
import { ForecastListView } from './forecastListView.js'

window.addEventListener('DOMContentLoaded', async () => {
    const forecastListView = new ForecastListView('#tableBody')
    
    // STATE.citiesList.forEach(async (cityId) => {
    //     const responseObj = await dataService.getWeatherForecast(cityId)
    //     const currentForecast = new Forecast(responseObj)
    //     STATE.currentForecastList.push(currentForecast)
    // })
    // [Promise, Promise, Promise]
    const data = await Promise.all(STATE.citiesList.map(cityId => {
            return dataService.getWeatherForecast(cityId)
    }))

    const forecastList = data.map(item => new Forecast(item))
    STATE.currentForecastList = [...forecastList]
    forecastListView.showForecast()
})
