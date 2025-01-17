import { useState, useEffect, useMemo } from 'react'
import { IOptionItem } from '../option.interface'
import { IWeatherList } from '../components/Weather/Weather.interface'

const DEBOUNCE_TIME = 750

const useWeather = () => {
	const [city, setCity] = useState('')
	const [debouncedCity, setDebouncedCity] = useState('')
	const [options, setOptions] = useState<[]>([])
	const [weather, setWeather] = useState<IWeatherList | null>(null)

	const fetchOptions = async (value: string) => {
		if (!value) return
		const response = await fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${
				import.meta.env.VITE_APP_API_KEY
			}`
		)
		const data = await response.json()
		setOptions(data)
	}

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedCity(city)
		}, DEBOUNCE_TIME)

		return () => {
			clearTimeout(handler)
		}
	}, [city])

	useEffect(() => {
		if (debouncedCity) {
			fetchOptions(debouncedCity)
		} else {
			setOptions([])
		}
	}, [debouncedCity])

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setCity(value)
		if (value === '') {
			setOptions([])
			setWeather(null)
		}
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
