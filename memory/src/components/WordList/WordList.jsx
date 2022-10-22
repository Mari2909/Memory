import React from "react";
import AddWord from "./AddWord";
import WordItem from "./WordItem";

import iconSave from "./assets/icon-save.svg";
import iconCancel from "./assets/icon-cancel.svg";
import iconEdit from "./assets/icon-edit.svg";
import iconDelete from "./assets/icon-delete.svg";

import style from './style.modules.scss';


export default class WordList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            isValid: true,
            english: props.english,
            transcription: props.transcription,
            russian: props.russian,
            tags: props.tags
        }
    }

    handleChange = () => {
        this.setState(
            {
                pressed: !this.state.pressed,
                isValid: true
            }
        )
    }

    handleChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            isValid: true
        })
    }

    saveChanges = () => {
        if (this.state.english === '' || this.state.russian === '' || this.state.russian === '' || this.state.tags === '') {
            this.setState({ isValid: false })
        } else {
            this.setState({
                isValid: true,
                pressed: false,
                english: this.state.english,
                transcription: this.state.transcription,
                russian: this.state.russian,
                tags: this.state.tags
            })
            console.log(this.state)
        }
    }

    render() {
        const { id, english, transcription, russian, tags } = this.props;
        return (
            <div>
                {!this.state.isValid && <div className="word-list__error-message">Заполните поля</div>}

                {this.state.pressed ?
                    <div className="line">
                        <AddWord
                            key={id}
                            id={id}
                            english={this.state.english}
                            transcription={this.state.transcription}
                            russian={this.state.russian}
                            tags={this.state.tags}
                            checkInput={this.handleChangeInput}
                            isValidClass={this.state.isValid} />

                        <div className="btn">
                            <button className="save" onClick={this.saveChanges} disabled={this.state.isValid ? false : true}>
                                <img src={iconSave} alt="icon save" />
                            </button>
                            <button className="close" onClick={this.handleChange}>
                                <img src={iconCancel} alt="icon cancel" />
                            </button>
                            <button className="del" onClick={this.deleteChange}>
                                <img src={iconDelete} alt="icon delete" />
                            </button>
                        </div>
                    </div>
                    :
                    <div className="line">
                        <WordItem
                            key={id}
                            id={id}
                            english={english}
                            transcription={transcription}
                            russian={russian}
                            tags={tags} />
                        <div className="btn">
                            <button className="edit" onClick={this.handleChange}>
                                <img src={iconEdit} alt="icon edit" />
                            </button>
                            <button className="del" onClick={this.deleteChange}>
                                <img src={iconDelete} alt="icon delete" />
                            </button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}