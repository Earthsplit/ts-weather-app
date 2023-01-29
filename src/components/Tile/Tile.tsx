import { FC } from 'react'
import { ITileProps } from './Tile.interface'

const Tile: FC<ITileProps> = ({ data, icon, content }) => {
	return (
		<div className='mb-5 flex w-[140px] flex-col items-center gap-1 rounded bg-white/60 py-3 text-xs font-semibold drop-shadow-lg'>
			<p>{content}</p>
			<img src={icon} alt={content} />
			{data}
		</div>
	)
}

export default Tile
