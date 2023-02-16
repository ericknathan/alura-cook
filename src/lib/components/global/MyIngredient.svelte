<script lang="ts">
	import Tag from '$components/shared/Tag.svelte';
	import { myIngredientsList } from '$lib/stores/myIngredientsList';

	export let ingredientName: string;

	function removeIngredient() {
		myIngredientsList.removeIngredient(ingredientName);
	}
</script>

<div class="my-ingredient-wrapper">
	<Tag isActive>
		<button
			class="close-button"
			on:click={removeIngredient}
			title="Remove ingredient from your list"
		/>
		{ingredientName}
	</Tag>
	<span class="remove-ingredient" on:click={removeIngredient} on:keydown={removeIngredient}>
		Remover
	</span>
</div>

<style>
	.my-ingredient-wrapper {
		position: relative;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.my-ingredient-wrapper .close-button {
		background-image: url('/icons/close.svg');
		height: 10px;
		width: 10px;
		cursor: pointer;

		position: absolute;
		top: 6px;
		right: 6px;
	}

	.my-ingredient-wrapper .remove-ingredient {
		width: 100%;

		color: var(--orange);

		line-height: 24px;
		font-size: 0.875rem;
		text-align: center;

		cursor: pointer;
	}
</style>
