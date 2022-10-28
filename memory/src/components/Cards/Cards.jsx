import React, { useState, useContext } from 'react';
import Card from '../Card/Card';
//import words from '../../data';
import { WordsContext } from '../Context/WordsContext';

export default function Cards(props) {

    const [pressed, setPressed] = useState(null);

    const handleChange = (index) => {
        setPressed(index);
    }
    const { words } = useContext(WordsContext);

    return (
        < section className="card-box" >
            {
                words.map((word, index) =>
                    <Card
                        pressed={pressed === index ? true : false}
                        key={word.id}
                        english={word.english}
                        transcription={word.transcription}
                        russian={word.russian}
                        tags={word.tags}
                        handleChange={() => handleChange(index)}
                    >
                    </Card>)
            }
        </ section>
    );
}