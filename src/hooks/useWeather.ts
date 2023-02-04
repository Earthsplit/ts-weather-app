import { useState } from 'react'
import { IOptionItem } from '../option.interface'
import { IWeatherList } from '../components/Weather/Weather.interface'

const useWeather = () => {
	const [city, setCity] = useState<string>('')
	const [options, setOptions] = useState<[]>([])
	const [weather, setWeather] = useState<IWeatherList | null>(null)

	const getOptions = async (value: string) => {
		const response = await fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${
				import.meta.env.VITE_APP_API_KEY
			}`
		)
		const data = await response.json()
		setOptions(data)
	}

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		if (value === '') {
			setCity('')
			setOptions([])
			setWeather(null)
			return
		}

		setCity(value)
		getOptions(value)
	}

	const onOptionSelect = async (option: IOptionItem) => {
		setCity(option.name)

		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${option.lat}&lon=${
				option.lon
			}&appid=${import.meta.env.VITE_APP_API_KEY}`
		)
		const data = await response.json()

		const weatherData = {
			...data.city,
			name: option.name,
			list: data.list.slice(0, 15)
		}
		setWeather(weatherData)
		setOptions([])
	}

	return {
		city,
		options,
		weather,
		onInputChange,
		onOptionSelect
	}
}

export default useWeather
