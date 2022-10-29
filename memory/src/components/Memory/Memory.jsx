import React, { useState, useContext } from 'react';
import Slider from './Slider';
import Card from '../Card/Card';
import { WordsContext } from '../Context/WordsContext';

export default function MemoryCheck(props) {

    const { words } = useContext(WordsContext);

    const [currentItem, setPosition] = useState(0);
    const [learnedWordsTotal, setLearnedWordsTotal] = useState(0);
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed)
        setLearnedWordsTotal(learnedWordsTotal + 1);
    }

    const showNext = () => {
        setPressed(false);
        setPosition(currentItem + 1);
    }

    const showPrev = () => {
        setPressed(false);
        if (currentItem > 0) {
            setPosition(currentItem - 1);
            setLearnedWordsTotal(learnedWordsTotal - 1);
        }
    }

    if (currentItem >= words.length) {
        return (
            <div>
                <div>Конец!</div>
                <div>Всего вы изучили слов: {learnedWordsTotal}</div>
            </div>
        )
    } else {
        return (
            <Slider
                showPrev={showPrev}
                showNext={showNext}
                number={currentItem + 1}
                total={words.length}
                learned={learnedWordsTotal}
                word={<Card
                    pressed={pressed}
                    handleChange={handleChange}
                    id={words[currentItem].id}
                    english={words[currentItem].english}
                    transcription={words[currentItem].transcription}
                    russian={words[currentItem].russian}
                    tags={words[currentItem].tags} />}>
            </Slider>
        )
    }
}