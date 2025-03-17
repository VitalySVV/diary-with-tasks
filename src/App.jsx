import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalIteam from './components/JournalIteam/JournalIteam';
function App() {
	const data = [
		{
			title: 'Подготовка и обновление курсов',
			text: 'Горные походы открывают удивительные природные ландшафты',
			date: new Date()
		},
		{
			title: 'Походы в горы', 
			text: 'Думал, что очень много времени',
			date: new Date()
		}
	];

	return (
		<>
			<h1>Заголовок</h1>
			<p>Какой-то текст</p>
			<Button/>
			<CardButton>
        Новое воспоминание
			</CardButton>
			<CardButton>
				<JournalIteam
					title = {data[0].title}
					text = {data[0].text}
					date = {data[0].date}
				/>
			</CardButton>
			<CardButton>
				<JournalIteam
					title = {data[1].title}
					text = {data[1].text}
					date = {data[1].date}
				/>
			</CardButton>
		</> 
	); 
}

export default App;
