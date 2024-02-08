import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<div className='page-content'>
							<Header />
							<Courses />
						</div>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/courses/add' element={<CreateCourse />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
			</Routes>
		</>
	);
}

export default App;
