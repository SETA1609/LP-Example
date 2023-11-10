import {createContext, useState} from 'react';

export const ProfileContext = createContext(
    {
        isDarkTheme: true,
        selectedLanguage: "EN",
        changeLanguage: () => {
        },
        changeTheme: () => {
        }
    }
);

export const ProfileContextProvider = ({ children }) => {
	const [selectedLanguage, setSelectedLanguage] = useState('EN');
	const [isDarkTheme, setIsDarkTheme]= useState(true);
	const changeLanguage = (language) => {
		setSelectedLanguage(language);
	};
	const changeTheme=()=>{
		setIsDarkTheme(!isDarkTheme)
	};
	const profileCtxValue = {
		isDarkTheme,
		selectedLanguage,
		changeLanguage,
		changeTheme,
	};
	return (
		<ProfileContext.Provider value={profileCtxValue}>
			{children}
		</ProfileContext.Provider>
	);
};