export default function Translation(props) {
    return (
        <div className="card-content">
            <div className="card-transcription">{props.transcription}</div>
            <div className="card-def">{props.russian}</div>
            <div className="card-category">{props.tags}</div>
        </div>
    );
}