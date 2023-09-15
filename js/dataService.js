const API_BASE_URL = 'http://api.openweathermap.org'
const API_ID = 'bf35cac91880cb98375230fb443a116f'
const apiIdParam = `&appid=${API_ID}`

const urls = {
    weather:    `${API_BASE_URL}/data/2.5/weather`,
    icon:       `http://openweathermap.org/img/wn/`  
}

class DataService {
   

}

export const dataService = new DataService()