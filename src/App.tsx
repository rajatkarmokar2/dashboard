/** @format */

import './css/App.css'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Dashbaord from './pages/dashboard/dashbaord'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/' element={<Dashbaord />} />
			</Routes>
		</div>
	)
}

export default App
