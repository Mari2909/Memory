import React, { useContext } from 'react';
import WordList from '../WordList/WordList';
import { WordsContext } from '../Context/WordsContext';

export default function Main() {
    const { words } = useContext(WordsContext);

    return (
        <div className="words-list">
            {
                words.map((word) =>
                    <WordList
                        id={word.id}
                        english={word.english}
                        transcription={word.transcription}
                        russian={word.russian}
                        tags={word.tags}
                    />)
            }
        </div>
    )
}