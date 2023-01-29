export interface IWeatherList {
	name: string
	country: string
	sunset: number
	sunrise: number
	timezone: number
	list: [
		{
			dt: number
			main: {
				feels_like: number
				humidity: number
				pressure: number
				temp: number
				temp_max: number
				temp_min: number
			}
			weather: [
				{
					main: string
					description: string
					icon: string
				}
			]
			wind: {
				speed: number
				deg: number
			}
		}
	]
}
