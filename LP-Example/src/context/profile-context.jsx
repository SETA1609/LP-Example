import {createContext} from 'react';

export const ProfileContext = createContext(
	{
		isDarkTheme: true,
		Language: "EN"
	}
);
