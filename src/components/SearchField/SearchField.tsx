import { FC } from 'react'
import { ISeachField } from './SeachField.interface'
import { IOptionItem } from '../../option.interface'

const SearchField: FC<ISeachField> = ({
	city,
	options,
	onInputChange,
	onOptionSelect
}) => {
	return (
		<section className='flex flex-col items-center rounded px-8 pt-8'>
			<h1 className='text-xl font-semibold'>Find weather in your city</h1>
			<div className='flex w-[250px] flex-col sm:w-[500px]'>
				<input
					value={city}
					onChange={onInputChange}
					type='text'
					placeholder='Enter a city name...'
					className='my-2 rounded-md border-2 border-white px-2 py-1 outline-none'
				/>
				<ul className='mb-2 rounded-sm bg-white '>
					{options.map((option: IOptionItem, index: number) => (
						<li key={`${option.name}-${index}`}>
							<button
								className='w-full px-2 py-1 text-left hover:bg-zinc-200'
								onClick={() => onOptionSelect(option)}
							>
								{option.name}, {option.country} {option.state}
							</button>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default SearchField
