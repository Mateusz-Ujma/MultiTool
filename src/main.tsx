import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainView from './views/MainView/MainView.tsx';
import Login from './views/Login/Login.tsx';
import Register from './views/Register/Register.tsx';
import Error from './views/ErrorPage/Error.tsx';
import Home from './views/Home/Home.tsx';
import GlobalStyle from './assets/GlobalStyles.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />,
	},
	{
		path: '/main',
		element: <MainView />,
		errorElement: <Error />,
	},
	{
		path: 'login',
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: 'register',
		element: <Register />,
		errorElement: <Error />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyle />
		<RouterProvider router={router} />
	</React.StrictMode>
);
