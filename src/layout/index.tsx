import { NavBarComponent } from '../components/nav-bar'
import style from './style.module.scss'

export const LayoutRootComponent = ({ children }: { children: any }) => {
	return (
		<>
			<header className={style.header}>
				<NavBarComponent />
			</header>
			{children}
			<footer></footer>
		</>
	)
}
