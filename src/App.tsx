import { useState } from 'react'
import * as C from "./App.styles";
import { Item } from './types/Item';
import { ListItem } from './ListItem';
import { AddArea } from './components/AddArea'

const App = () => {

  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList);
  }

  const handleDelete = (item: Item) => {
    const index = list.findIndex((task) => task.name == item.name);


    if (index == -1) {
      return;
    }
    list.splice(index, 1);
    setList([...list]);
  }




  return (
    <>
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>
          <AddArea onEnter={handleAddTask} />
          {list.map((item, index) => (
            <ListItem key={index} item={item} onDelete={handleDelete} />
          ))}
        </C.Area>
        <C.Background className='test'>
          <img className="spider-man" src={require('./assets/images/miles.png')} alt="Spider-Man" />
        </C.Background>
      </C.Container>

    </>
  );
}

export default App;
