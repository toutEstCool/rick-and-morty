import { FC } from 'react'
import { IPropsButton } from '../../../common/types'
import cn from 'classnames'
import style from './style.module.scss'

export const ButtonUiComponent: FC<IPropsButton> = ({
	children,
	appearance,
	sizes,
	type,
	...props
}: IPropsButton): JSX.Element => {
	return (
		<button className={cn(style.uiBtn)} {...props} type={type}>
			{children}
		</button>
	)
}
