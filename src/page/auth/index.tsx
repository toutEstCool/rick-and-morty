import { useLocation } from 'react-router-dom'
import { LoginComponent } from '../../components/auth/login'
import { RegisterComponent } from '../../components/auth/register'
export const AuthRootComponent = (): JSX.Element => {
	const location = useLocation()
	return (
		<>
			{location.pathname === '/register' ? (
				<RegisterComponent />
			) : location.pathname === '/login' ? (
				<LoginComponent />
			) : null}
		</>
	)
}
