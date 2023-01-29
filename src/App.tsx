import { FC } from 'react'
import SearchField from './components/SearchField/SearchField'
import useWeather from './hooks/useWeather'
import './index.css'
import Weather from './components/Weather/Weather'

const App: FC = () => {
	const { city, options, weather, onInputChange, onOptionSelect } = useWeather()
	return (
		<main className='bg-radial flex h-screen w-full flex-col items-center justify-center'>
			<div className='h-screen w-full max-w-[600px] bg-blue-200'>
				<SearchField
					city={city}
					options={options}
					onInputChange={onInputChange}
					onOptionSelect={onOptionSelect}
				/>
				{weather ? <Weather data={weather} /> : null}
			</div>
		</main>
	)
}

export default App
