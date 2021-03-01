import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
	const auth = useSelector((state) => state.auth);

	return (
		<nav>
			<div className='nav-wrapper'>
				<Link to='/' className='brand-logo'>
					React SSR
				</Link>
				<ul className='right'>
					<li>
						<Link to='/users'>Users</Link>
					</li>
					<li>
						<Link to='/admin'>Admins</Link>
					</li>
					<li>
						{auth ? <a href='/api/logout'>Logout</a> : <a href='/api/auth/google'>Login</a>}
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
