import * as C from './styles';
import { useState, KeyboardEvent } from 'react';

type Props = {
    onEnter: (taskName: string) => void,
}


export const AddArea = ({ onEnter }: Props) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        // console.log(e.code);
        if ((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    const handleClick = () => {

        if (inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }



    return (
        <C.Container>
            <input
                type="text"
                placeholder='Alguma tarefa ?'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
            <button className="image" onClick={handleClick}>➕</button>
        </C.Container>
    )
}