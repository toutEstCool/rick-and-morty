import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	InputHTMLAttributes,
	ReactNode,
} from 'react'

export interface authLoginData {
	email: string
	password: string
}

//  Ui props
export interface IPropsInput
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	type: 'search' | 'password' | 'email' | 'text'
	sizes?: 'xs' | 'sm' | 'md' | 'lg'
	placeholder: string
}

export interface IPropsButton
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: ReactNode
	appearance: 'blue' | 'error' | 'common'
	sizes?: 'xs' | 'sm' | 'md' | 'lg'
	type: 'button' | 'submit' | 'reset'
}
