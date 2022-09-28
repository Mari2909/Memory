import React, { useEffect, useRef } from 'react';

export default function Word(props) {
    const ref = useRef();
    useEffect(() => ref.current.focus(), []);

    return (
        <button ref={ref} onClick={props.show} className="card-btn">перевод</button>
    );
}