export default function AddWord(props) {
    return (
        <div className="word-info">
            <div>{props.id}</div>
            <div>
                <input
                    name='english'
                    className={`${props.english === '' ? 'word-list__error-input' : 'word'}`}
                    value={props.english}
                    onChange={props.checkInput}
                    placeholder="word" />
            </div>
            <div>
                <input
                    name='transcription'
                    className={`${props.transcription === '' ? 'word-list__error-input' : 'word'}`}
                    value={props.transcription}
                    onChange={props.checkInput}
                    placeholder="transcription" />
            </div>
            <div>
                <input
                    name='russian'
                    className={`${props.russian === '' ? 'word-list__error-input' : 'word'}`}
                    value={props.russian}
                    onChange={props.checkInput}
                    placeholder="translate" />
            </div>
            <div>
                <input
                    name='tags'
                    className={`${props.tags === '' ? 'word-list__error-input' : 'word'}`}
                    value={props.tags}
                    onChange={props.checkInput}
                    placeholder="tags" />
            </div>
        </div>
    );
}