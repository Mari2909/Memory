export default function WordItem(props) {
    return (
        <div className="word-info">
            <div>{props.id}</div>
            <div>{props.english}</div>
            <div>{props.transcription}</div>
            <div>{props.russian}</div>
            <div>{props.tags}</div>
        </div>
    );
}