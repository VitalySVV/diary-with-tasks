import './JournalForm.css';
import Button from '../Button/Button';
import { useState } from 'react';

function JournalForm({onSubmit}){
	const[inputData, setInputData] = useState('');
	const[state, setStae] = useState({
		age: 31
	});
	const inputChange = (event) => {
		setInputData(event.target.value); 
	};

	const addJournalItem = (e) => {
		state.age = 40;
		setStae({...state});
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		e.preventDefault();
		onSubmit(formProps);
		console.log(formProps);
	};
	return(
	
		<form className='journal-form' onSubmit={addJournalItem}>
			{state.age}
			<input type="text" name='title'/>
			<input type="date" name='date'/>
			<input type="text" name='tag' value={inputData} onChange={inputChange}/>
			<textarea name="text" id=""></textarea>
			<Button text="Сохранить" onClick={() => console.log('Нажали')}/>
		</form>
	
	);
} 

export default JournalForm;