import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import UserProvider from './context/User/Provider';
import Login from './pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Main from './layouts/Main';
import SearchProvider from './context/Search/Provider';
import Report from './pages/Report';
import DownloadProvider from './context/Download/Provider';
// import Faculty from './pages/Faculty';
import Appraisal from './pages/Appraisal';
import LandingPage from './pages/LandingPage/LandingPage';
import AppraisalModalProvider from './context/Appraisal Modal/Provider';
import AppraisalsProvider from './context/Appraisals/Provider';
import AppraisalForm from './pages/Appraisal Form';
import PayCommissionCalculator from './pages/PayCommissionCalculator';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <LandingPage />	
			},
			{
				path: "login",
				element: <Login />
			},
			{
				path: "*",
				element: <Main />,
				children: [
					{
						path: "home",
						element: <Home />
					},
					{
						path: "appraisalManagement",
						element: <Appraisal />
					},
					{
						path: "report",
						element: <Report />
					},
					{
						path: "add",
						element: <AppraisalForm />
					},
					{
						path: "pay",
						element: <PayCommissionCalculator />
					}
				]
			}
		]
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<UserProvider>
			<AppraisalsProvider>
				<SearchProvider>
					<DownloadProvider>
						<AppraisalModalProvider>
							<RouterProvider router={router} />
						</AppraisalModalProvider>
					</DownloadProvider>
				</SearchProvider>
			</AppraisalsProvider>
		</UserProvider>
	</React.StrictMode>
);