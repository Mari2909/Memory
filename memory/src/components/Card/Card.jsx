import React, { useState } from 'react';
import style from './style.modules.scss';
import Translation from './Translation';
import Word from './Word';

export default function Card(props) {


    return (
        <div className="card">
            <div className="card-word">{props.english}</div>
            {props.pressed ? (
                <Translation
                    transcription={props.transcription}
                    russian={props.russian}
                    tags={props.tags}
                //</div>id={props.id}
                >
                </Translation>
            ) : (
                <Word show={props.handleChange}></Word>
            )}
        </div>
    );
}