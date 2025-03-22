import './App.css';
import CardButton from './components/CardButton/CardButton';
import JournalIteam from './components/JournalIteam/JournalIteam';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import Body from './layout/Body/Body';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';


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
		<div className='app '>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
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
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm/>
			</Body>
		</div> 
	); 
}

export default App;


