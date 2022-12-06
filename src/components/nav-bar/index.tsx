import { Link } from 'react-router-dom'
import { WiDaySunny } from 'react-icons/wi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoHomeOutline } from 'react-icons/io5'
import style from './style.module.scss'
import { RiSearchLine } from 'react-icons/ri'
import { useState } from 'react'
import { AuthPopUpComponent } from '../auth-pop-up'

export const NavBarComponent = () => {
	const [isPopUpMenu, setIsPopUpMenu] = useState(false)

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
					<RxHamburgerMenu
						size={23}
						onClick={() => setIsPopUpMenu(!isPopUpMenu)}
					/>
					{isPopUpMenu && <AuthPopUpComponent />}
				</div>
			</div>
		</nav>
	)
}
