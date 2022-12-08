import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LoginComponent } from '../../components/auth/login'
import { RegisterComponent } from '../../components/auth/register'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { authLoginData } from '../../common/types'
export const AuthRootComponent = (): JSX.Element => {
	const location = useLocation()
	const navigate = useNavigate()
	const [formData, setFormData] = useState<authLoginData>({
		email: '',
		password: '',
	})

	const { email, password } = formData

	const handleSubmitForm = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (!formData.email || !formData.password) return console.log('Пустые поля')

		if (location.pathname === '/login') {
			try {
				const auth = getAuth()

				const userCredential = await signInWithEmailAndPassword(
					auth,
					email,
					password
				)
				console.log(userCredential)

				if (userCredential.user) {
					navigate('/')
				}
			} catch (error) {
				console.log(error)
			}
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
