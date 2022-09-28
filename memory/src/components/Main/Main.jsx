import React from 'react';
import WordList from '../WordList/WordList';
import words from '../../data';

export default function Main() {

    return (
        <div className="words-list">
            {
                words.map((word) => <WordList id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected} />)
            }
        </div>
    )
}