import {createContext} from 'react';

export const ProfileContext = createContext(
	{
		isDarkTheme: true,
		selectedLanguage: "EN",
		changeLanguage: ()=>{},
		changeTheme:()=>{}
	}
);
