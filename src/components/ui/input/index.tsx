import { FC } from 'react'
import { IPropsInput } from '../../../common/types'
import cn from 'classnames'
import style from './style.module.scss'

export const InputUiComponent: FC<IPropsInput> = ({
	type,
	sizes,
	placeholder,
	...props
}: IPropsInput): JSX.Element => {
	return (
		<input
			className={cn(style.uiInput)}
			{...props}
			type={type}
			placeholder={placeholder}
		/>
	)
}
