import './App.css';

import { Routes, Route } from 'react-router-dom';

import { tokens } from './constants';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	const isAuthorized = !!localStorage.getItem(tokens.authToken);
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						isAuthorized ? (
							<div className='page-content'>
								<Header />
								<Courses />
							</div>
						) : (
							<Login />
						)
					}
				/>
				<Route
					path='/login'
					element={
						<div className='page-content'>
							<Header />
							<Login />
						</div>
					}
				/>
				<Route
					path='/registration'
					element={
						<div className='page-content'>
							<Header />
							<Registration />
						</div>
					}
				/>
				<Route
					path='/courses'
					element={
						<div className='page-content'>
							<Header />
							<Courses />
						</div>
					}
				/>
				<Route
					path='/courses/:courseId'
					element={
						<div page-content>
							<Header />
							<CourseInfo />
						</div>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<div page-content>
							<Header />
							<CreateCourse />
						</div>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
