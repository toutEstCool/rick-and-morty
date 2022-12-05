import { HomePage } from './page/home'
import { Routes, Route } from 'react-router-dom'
import { AuthRootComponent } from './page/auth'
import { PrivateRoute } from './utils/route/privateRoute'

export const App = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<PrivateRoute />}>
					<Route path='/' element={<HomePage />} />
				</Route>
				<Route path='/register' element={<AuthRootComponent />} />
				<Route path='/login' element={<AuthRootComponent />} />
			</Routes>
		</div>
	)
}
