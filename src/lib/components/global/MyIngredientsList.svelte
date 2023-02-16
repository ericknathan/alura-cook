<script lang="ts">
	import { myIngredientsList } from '$lib/stores/myIngredientsList';
	import MyIngredient from './MyIngredient.svelte';

	import { flip } from 'svelte/animate';
	import { fade, slide } from 'svelte/transition';
</script>

<section class="my-ingredients-list" transition:slide>
	<h2>Your list:</h2>

	<ul>
		{#each $myIngredientsList as ingredientName (ingredientName)}
			<li animate:flip transition:fade>
				<MyIngredient {ingredientName} />
			</li>
		{/each}
	</ul>
</section>

<style>
	.my-ingredients-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		padding-bottom: 1.625rem;
	}

	.my-ingredients-list > h2 {
		margin-bottom: 1.5rem;

		color: var(--orange);

		font-size: 1.5rem;
		font-weight: 700;
		line-height: 2rem;
	}

	.my-ingredients-list ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem 1.875rem;
	}
</style>
