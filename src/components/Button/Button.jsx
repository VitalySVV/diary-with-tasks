import './Button.css';
import { useState } from 'react';

function Button() {
	const [text, setText] = useState('Сохранить');
	console.log('Ререндер');
	const clicked = () => {
		setText(t => t + '!');
	};

	return (
		<button onClick={clicked} className='button accent'>{text}</button>
	); 
}

export default Button;