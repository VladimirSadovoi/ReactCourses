import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { MainProvider } from './context/MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<MainProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</MainProvider>
);
