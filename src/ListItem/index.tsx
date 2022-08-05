import * as C from './styles';
import { Item } from '../types/Item';
import { useState } from 'react';

type Props = {
    item: Item
    onDelete: (item: Item) => void;
}



export const ListItem = ({ item, onDelete }: Props) => {

    const [isChecked, setIsChecked] = useState(item.done);



    return (
        <C.Container done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.name}</label>
            <button onClick={() => onDelete(item)}>Delete</button>
        </C.Container>
    );
}