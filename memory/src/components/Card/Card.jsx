import React, { useState } from 'react';
import style from './style.modules.scss';
import Translation from './Translation';
import Word from './Word';

export default function Card(props) {

    const [pressed, setState] = useState(false);

    const handleChange = () => {
        setState(
            {
                pressed: !pressed
            }
        );
    }

    return (
        <div className="card">
            <div className="card-word">{props.english}</div>
            {pressed ? (
                <Translation transcription={props.transcription} russian={props.russian} tags={props.tags} id={props.id}></Translation>
            ) : (
                <Word show={handleChange}></Word>
            )}
        </div>
    );
}