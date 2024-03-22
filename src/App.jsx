import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';

import { tokens } from './constants';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseForm from './components/CourseForm/CourseForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
	const isAuthorized = !!localStorage.getItem(tokens.authToken);

	return (
		<div className='page-content'>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Navigate replace to={isAuthorized ? 'courses' : 'login'} />}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route
					path='/courses/update/:courseId'
					element={
						<PrivateRoute>
							<CourseForm mode='update' />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<PrivateRoute>
							<CourseForm mode='add' />
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
