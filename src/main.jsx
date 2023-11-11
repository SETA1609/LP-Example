import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { ProfileContext, ProfileContextProvider } from './context/profile-context.jsx';

const RootWrapper = () => {
    const { isDarkTheme } = useContext(ProfileContext);

    useEffect(() => {
        const rootElement = document.getElementById('root');
        rootElement.classList.add(isDarkTheme ? 'dark-theme' : 'light-theme');
    }, [isDarkTheme]);

    return (
        <ProfileContextProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ProfileContextProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<RootWrapper />);
