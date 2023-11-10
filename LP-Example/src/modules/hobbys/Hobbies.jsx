import React, { useContext } from 'react';
import './Hobbies.css';
import hobbiesContent from './hobbiesContent';
import Card from './card/Card';
import { ProfileContext } from '../../context/profile-context';

function Hobbies() {
    const content = hobbiesContent;
    const { selectedLanguage } = useContext(ProfileContext);

    const selectedHobby = content.find((hobby) => hobby.language === selectedLanguage);

    if (!selectedHobby) {
        return null;
    }

    const hobbyContent = selectedHobby.content;

    return (
        <div className="Hobbies">
            {hobbyContent.map((item, index) => (
                <div key={index}  className="grid-item">
                    <Card title={item.title} body={item.body} />
                </div>
            ))}
        </div>
    );
}

export default Hobbies;
