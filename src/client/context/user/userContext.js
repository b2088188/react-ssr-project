import { createContext, useContext } from 'react';

const UserContext = createContext();
UserContext.displayName = 'UserProvider';

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) throw new Error('The user context must be wrapped in UserProvider');
	return context;
};

export default UserContext;
