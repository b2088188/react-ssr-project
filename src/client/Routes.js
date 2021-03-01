import Home from './pages/Home';
import UsersList from './pages/UsersList';
import App from './App';

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
				...UsersList,
				path: '/users'
			}
		]
	}
];

export default Routes;
