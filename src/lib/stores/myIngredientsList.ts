import { writable } from 'svelte/store';

const { set, subscribe, update } = writable<string[]>([]);

export const myIngredientsList = {
	set,
	subscribe,
	addIngredient: (ingredientName: string) => {
		update((prevValue) => [...prevValue, ingredientName]);
	},
	removeIngredient: (ingredientName: string) => {
		update((ingredientsList) =>
			ingredientsList.filter((ingredient) => ingredient !== ingredientName)
		);
	}
};
