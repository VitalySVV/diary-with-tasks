import './App.css';
import CardButton from './components/CardButton/CardButton';
import JournalIteam from './components/JournalIteam/JournalIteam';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import Body from './layout/Body/Body';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [
	// {
	// 	id: 1,
	// 	title: 'Подготовка и обновление курсов',
	// 	text: 'Горные походы открывают удивительные природные ландшафты',
	// 	date: new Date()
	// },
	// {
	// 	id: 2,
	// 	title: 'Походы в горы', 
	// 	text: 'Думал, что очень много времени', 
	// 	date: new Date()
	// }
];

function App() {
	const[items, setItems] = useState(INITIAL_DATA);
	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			text: item.text,
			title: item.text,
			date: new Date(item.date),
			id: Math.max(...oldItems.map(i => i.id)) + 1
		}]);
	};


	const sortItems = (a, b) => {
		if(a.date > b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	var list = <p>Записей пока нет, добавьте первую</p>;
	if (items.length > 0){
		list = items.sort(sortItems).map(el => (
			<CardButton key={el.id}>
				<JournalIteam
					title = {el.title}
					text = {el.text} 
					date = {el.date}
				/>
			</CardButton>
		));
	};

	return (
		<div className='app '>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					{list}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</div> 
	); 
}

export default App;


