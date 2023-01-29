import { FC } from 'react'
import { IWeatherList } from './Weather.interface'
import { getTemperature, getTime, getSun } from '../../helpers'
import Tile from '../Tile/Tile'
import {
	humidity,
	pressure,
	sunrise,
	sunset,
	temperature,
	wind
} from '../../assets'

interface IWeatherProps {
	data: IWeatherList
}

const Weather: FC<IWeatherProps> = ({ data }) => {
	const weatherToday = data.list[0]

	return (
		<section className='flex items-center justify-center'>
			<div className='flex flex-col items-center'>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-xl font-semibold'>{data.name}</h1>
					<div className='text-[32px] font-semibold'>
						{getTemperature(weatherToday.main.temp)}
					</div>
					<p className='text-[18px] font-semibold'>
						{weatherToday.weather[0].description}
					</p>
				</div>
				<section className='my-5 flex max-w-[320px] items-center gap-4 overflow-x-scroll rounded bg-white/60 p-4 text-xs font-semibold drop-shadow-lg sm:max-w-[500px]'>
					{data.list.map((item, index) => (
						<div
							key={`${data.name}-${index}`}
							className='flex h-[70px] flex-col items-center'
						>
							<p>{index !== 0 ? getTime(item.dt, data.timezone) : 'Now'}</p>
							<img
								src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
								alt='icon'
								className='h-[50px] w-[50px] object-cover'
							/>
							<p>{getTemperature(item.main.temp)}</p>
						</div>
					))}
				</section>

				<section className='grid w-full grid-cols-2 justify-items-center'>
					<Tile
						data={getSun(data.sunrise, data.timezone)}
						icon={sunrise}
						content='Sunrise'
					/>
					<Tile
						data={getSun(data.sunset, data.timezone)}
						icon={sunset}
						content='Sunset'
					/>
					<Tile
						data={getTemperature(weatherToday.main.feels_like)}
						icon={temperature}
						content='Feels like'
					/>
					<Tile
						data={`${weatherToday.main.humidity}%`}
						icon={humidity}
						content='Humidity'
					/>
					<Tile
						data={`${weatherToday.main.pressure} hPa`}
						icon={pressure}
						content='Pressure'
					/>
					<Tile
						data={`${weatherToday.wind.speed} km/h`}
						icon={wind}
						content='Wind speed'
					/>
				</section>
			</div>
		</section>
	)
}

export default Weather
