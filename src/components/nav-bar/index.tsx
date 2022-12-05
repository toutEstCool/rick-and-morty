import { Link } from 'react-router-dom'
import { WiDaySunny } from 'react-icons/wi'
import { RiMoonFill } from 'react-icons/ri'
import { IoHomeOutline } from 'react-icons/io5'
import style from './style.module.scss'
import { RiSearchLine } from 'react-icons/ri'

export const NavBarComponent = () => {
	return (
		<nav className={style.rootNavBar}>
			<div className={style.navContainer}>
				<div className={style.navContainerLeft}>
					<Link to='/'>Welcome, Alex</Link>
					<div>
						<WiDaySunny size={23} />
						<IoHomeOutline size={23} />
					</div>
				</div>
				<div className={style.navContainerRight}>
					<div></div>
					<div className={style.inputWrapper}>
						<RiSearchLine />
						<input type='text' placeholder='Search' />
					</div>
				</div>
			</div>
		</nav>
	)
}
