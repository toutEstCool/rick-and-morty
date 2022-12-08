import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonUiComponent } from '../../ui/button'
import { InputUiComponent } from '../../ui/input'
import style from './style.module.scss'

export const LoginComponent = ({ formData, setFormData }: any): JSX.Element => {
	const [disabled, setDisabled] = useState(formData.isFiledIn)

	const onChangeInputData = (e: any) => {
		setFormData((prevState: {}) => ({
			...prevState,
			[e.target.type]: e.target.value,
		}))
		if (formData.email && formData.password) {
			setDisabled(false)
		}
	}

	return (
		<>
			<h3>Welcome Back</h3>
			<InputUiComponent
				type='email'
				placeholder='e-Mail'
				onChange={onChangeInputData}
			/>
			<InputUiComponent
				type='password'
				placeholder='Password'
				onChange={onChangeInputData}
			/>
			<ButtonUiComponent appearance='blue' type='submit' disabled={disabled}>
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
