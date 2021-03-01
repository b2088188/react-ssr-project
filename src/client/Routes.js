import Home from './pages/Home';
import UsersList from './pages/UsersList';
import AdminsList from './pages/AdminsList';
import App from './App';
import NotFound from './pages/NotFound';

const Routes = [
	{
		...App,
		routes: [
			{
				...Home,
				path: '/',
				exact: true
			},
			{
				...AdminsList,
				path: '/admins'
			},
			{
				...UsersList,
				path: '/users'
			},
			{
				...NotFound,
				path: '*'
			}
		]
	}
];

export default Routes;
