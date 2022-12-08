import { Link } from 'react-router-dom'
import { ButtonUiComponent } from '../../ui/button'
import { InputUiComponent } from '../../ui/input'
import style from './style.module.scss'

export const LoginComponent = ({ setFormData }: any): JSX.Element => {
	const onChangeInputData = (e: any) => {
		setFormData((prevState: {}) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}))
	}
	return (
		<>
			<h3>Welcome Back</h3>
			<InputUiComponent type='email' placeholder='e-Mail' />
			<InputUiComponent type='password' placeholder='Password' />
			<ButtonUiComponent appearance='blue' type='submit'>
				Sign In
			</ButtonUiComponent>
			<div className={style.infoForUser}>or</div>
			<ButtonUiComponent appearance='blue' type='submit'>
				Google Account
			</ButtonUiComponent>
			<h4>
				Not registered yet? <span>Create an Account</span>
			</h4>
		</>
	)
}
