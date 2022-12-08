import { FC } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

export const AuthPopUpComponent: FC = (): JSX.Element => {
	const isAuth = false
	return (
		<ul className={style.rootPopUp}>
			{isAuth ? (
				<li>Выйти</li>
			) : (
				<li>
					<Link to='/login'>Войти</Link>
				</li>
			)}
		</ul>
	)
}
