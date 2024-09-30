import { writable } from 'svelte/store';

export type Todo = {
	id: number;
	done: boolean;
	description: string;
};

export function createTodoStore(initial: Todo[]) {
	let uid = 1;

	const todos = initial;

	const { subscribe, update } = writable(todos);

	return {
		subscribe,
		add: (description: string) => {
			const todo = {
				id: uid++,
				done: false,
				description
			};

			update(($todos) => [...$todos, todo]);
		},
		remove: (todo: Todo) => {
			update(($todos) => $todos.filter((t) => t !== todo));
		},
		mark: (todo: Todo, done: boolean) => {
			update(($todos) => [...$todos.filter((t) => t !== todo), { ...todo, done }]);
		}
	};
}
