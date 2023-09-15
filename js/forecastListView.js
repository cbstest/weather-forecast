import { getElement } from './helpers.js'
import { STATE } from './state.js'

export class ForecastListView {
    #forecastTableBody

    constructor(tableBodyId) {
        this.#forecastTableBody = getElement(tableBodyId)
   }

   showForecast() {
    const forecastList = STATE.currentForecastList
    if (forecastList.length > 0) {
        forecastList.forEach(item => {
            this.#forecastTableBody.append(item.createElement())
        })
        // this.#forecastTableBody.append
    }
   }
}