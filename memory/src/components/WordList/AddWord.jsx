export default function AddWord(props) {
    return (
        <div className="word-info">
            <div>{props.id}</div>
            <div>
                <input
                    name='english'
                    className={`word ${props.isValidClass ? '' : 'word-list__error'}`}
                    value={props.english}
                    onChange={props.checkInput}
                    placeholder="word" />
            </div>
            <div>
                <input
                    name='transcription'
                    className={`word ${props.isValidClass ? '' : 'word-list__error'}`}
                    value={props.transcription}
                    onChange={props.checkInput}
                    placeholder="transcription" />
            </div>
            <div>
                <input
                    name='russian'
                    className={`word ${props.isValidClass ? '' : 'word-list__error'}`}
                    value={props.russian}
                    onChange={props.checkInput}
                    placeholder="translate" />
            </div>
            <div>
                <input
                    name='tags'
                    className={`word ${props.isValidClass ? '' : 'word-list__error'}`}
                    value={props.tags}
                    onChange={props.checkInput}
                    placeholder="tags" />
            </div>
        </div>
    );
}