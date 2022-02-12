import React, { useRef } from 'react';
import './style.css';

interface InputFieldProps {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

// const InputField: React.FC<InputFieldProps> = ({ todo, setTodo }: InputFieldProps) => {
const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			className='input'
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}>
			<input
				type='text'
				ref={inputRef}
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder='Ajouter une tâche'
				className='input__box'
			/>
			<button className='input__submit' type='submit'>
				Go
			</button>
		</form>
	);
};

export default InputField;
