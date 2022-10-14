import left from './assets/left.svg';
import right from './assets/right.svg';
import style from './style.modules.scss';

export default function Slider(props) {
    return (
        <div className="card-slider">
            <img
                className="left"
                src={left}
                alt="left"
                onClick={props.showPrev} />
            <div>
                <p>изучено слов: {props.learned}</p>
                <div>{props.word}</div>
                <p className="card-counter">
                    {props.number} / {props.total}
                </p>
            </div>

            <img
                className="right-arrow"
                src={right}
                alt="right-arrow"
                onClick={props.showNext} />

        </div>
    )
}
