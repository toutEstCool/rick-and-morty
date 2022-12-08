import { ButtonUiComponent } from '../../ui/button'
import { InputUiComponent } from '../../ui/input'

export const RegisterComponent = (): JSX.Element => {
	return (
		<>
			<h3>Welcome New User</h3>
			<InputUiComponent type='email' placeholder='e-Mail' />
			<InputUiComponent type='password' placeholder='Password' />
			<ButtonUiComponent appearance='blue' type='submit'>
				Sign Up
			</ButtonUiComponent>
		</>
	)
}
