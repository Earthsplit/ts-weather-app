import { IOptionItem } from '../../option.interface'

export interface ISeachField {
	city: string
	options: []
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onOptionSelect: (option: IOptionItem) => void
}
