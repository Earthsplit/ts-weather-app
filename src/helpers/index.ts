export const getTemperature = (temp: number): string => {
	return `${Math.round(temp - 273.15)}°C `
}

export const getTime = (timestamp: number, timezone: number): string => {
	const dtFormat = new Intl.DateTimeFormat('en-GB', {
		timeStyle: 'short',
		timeZone: 'UTC'
	})

	return dtFormat.format(new Date(timestamp * 1e3))
}

export const getSun = (timestamp: number, timezone: number): string => {
	const dtFormat = new Intl.DateTimeFormat('en-GB', {
		timeStyle: 'short',
		timeZone: 'UTC'
	})

	return dtFormat.format(new Date((timestamp + timezone) * 1e3))
}
