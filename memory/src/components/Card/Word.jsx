import React, { useEffect, useRef } from 'react';

export default function Word(props) {
    const ref = useRef();
    useEffect(() => ref.current.focus(), []);

    return (
        <button className="card-btn"
            ref={ref}
            onClick={props.show}
        >
            перевод
        </button>
    );
}