import { FC } from 'react'
import style from './style.module.scss'

export const AuthPopUpComponent: FC = (): JSX.Element => {
	return (
		<ul className={style.rootPopUp}>
			<li>hello</li>
			<li>javascript</li>
		</ul>
	)
}
