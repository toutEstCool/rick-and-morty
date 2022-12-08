export const LoginComponent = ({ setFormData, formData }: any): JSX.Element => {
	const onChangeInputData = (e: any) => {
		setFormData((prevState: {}) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}))
	}
	return (
		<>
			<input id='email' onChange={onChangeInputData} />
			<input id='password' onChange={onChangeInputData} />
			<button type='submit'>Send</button>
		</>
	)
}
