import React, { createContext, useContext, useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from '../constants';

const MainContext = createContext();

const MainProvider = ({ children }) => {
	const [allCourses, setCourses] = useState(mockedCoursesList);
	const [allAuthors, setAuthors] = useState(mockedAuthorsList);

	const addNewCourse = (newCourse) => {
		setCourses((prevCourses) => [...prevCourses, newCourse]);
	};

	const filterCourses = (filteredCourses) => {
		setCourses(filteredCourses);
	};

	const addNewAuthor = (newAuthor) => {
		setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
	};

	return (
		<MainContext.Provider
			value={{
				allCourses,
				allAuthors,
				addNewCourse,
				filterCourses,
				addNewAuthor,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};

const useMainContext = () => {
	const context = useContext(MainContext);
	if (!context) {
		throw new Error('useMainContext error');
	}
	return context;
};

export { MainProvider, useMainContext };
