import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';
import './style.css';

interface TodoListProps {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	completedTodos: Todo[];
	setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
	todos,
	setTodos,
	completedTodos,
	setCompletedTodos,
}: TodoListProps) => {
	return (
		<div className='container'>
			<Droppable droppableId='TodosList '>
				{(provided) => (
					<div
						className='todos'
						ref={provided.innerRef}
						{...provided.droppableProps}>
						<span className='todos__heading'>En cours</span>
						{todos.map((todo, index) => (
							<SingleTodo
								index={index}
								todo={todo}
								key={todo.id}
								todos={todos}
								setTodos={setTodos}
							/>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
			<Droppable droppableId='TodosDone '>
				{(provided) => (
					<div
						className='todos remove'
						ref={provided.innerRef}
						{...provided.droppableProps}>
						<span className='todos__heading'>Terminées</span>
						{completedTodos.map((todo, index) => (
							<SingleTodo
								index={index}
								todo={todo}
								key={todo.id}
								todos={completedTodos}
								setTodos={setCompletedTodos}
							/>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default TodoList;
