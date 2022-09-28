import React from 'react';
import Card from '../Card/Card';
import words from '../../data';

export default function Cards(props) {
    return (
        <section className="card-box">
            {
                words.map((word) => <Card key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected}></Card>)
            }
        </section>
    );
}