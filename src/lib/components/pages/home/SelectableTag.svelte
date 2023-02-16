<script lang="ts">
	import Tag from '../../shared/Tag.svelte';
	import { myIngredientsList } from '$lib/stores/myIngredientsList';

	export let ingredientName: string;
	$: isActive = $myIngredientsList.includes(ingredientName);

	function toggleActive() {
		if (!isActive) myIngredientsList.addIngredient(ingredientName);
		else myIngredientsList.removeIngredient(ingredientName);
	}
</script>

<button on:click={toggleActive}>
	<Tag {isActive}>
		{ingredientName}
	</Tag>
</button>

<style>
	button {
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	button:hover {
		transform: scale(1.1);
		filter: brightness(0.95);
	}
</style>
