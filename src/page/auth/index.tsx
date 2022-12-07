import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LoginComponent } from '../../components/auth/login'
import { RegisterComponent } from '../../components/auth/register'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export const AuthRootComponent = (): JSX.Element => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData
	const location = useLocation()
	const navigate = useNavigate()

	const handleSubmitForm = async (e: { preventDefault: () => void }) => {
		e.preventDefault()

		if (location.pathname === 'login') {
			try {
				const auth = getAuth()
				const userCredential = await signInWithEmailAndPassword(
					auth,
					email,
					password
				)
				if (userCredential.user) {
					navigate('/')
				}
			} catch (error) {
				return error
			}
		} else {
		}
	}
	return (
		<>
			<div>
				<form onSubmit={handleSubmitForm}>
					{location.pathname === '/register' ? (
						<RegisterComponent />
					) : location.pathname === '/login' ? (
						<LoginComponent setFormData={setFormData} />
					) : null}
				</form>
			</div>
		</>
	)
}
