import './JournalForm.css';
import Button from '../Button/Button';
import { useState } from 'react';

function JournalForm(){
	const[inputData, setInputData] = useState('');

	const inputChange = (event) => {
		setInputData(event.target.value); 
	};

	const addJournalItem = (e) => {
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		e.preventDefault();
		console.log(formProps);
	};
	return(
	
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type="text" name='title'/>
			<input type="date" name='date'/>
			<input type="text" name='tag' value={inputData} onChange={inputChange}/>
			<textarea name="post" id=""></textarea>
			<Button text="Сохранить"/>
		</form>
	
	);
}

export default JournalForm;