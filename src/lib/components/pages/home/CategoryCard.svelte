<script lang="ts">
	import type { ICategory } from '$lib/interfaces';
	import Card from '../../shared/Card.svelte';
	import SelectableTag from './SelectableTag.svelte';

	export let categoryDetails: ICategory;
</script>

<Card>
	<div class="card-wrapper">
		<img
			src="/icons/ingredients_categories/{categoryDetails.image}"
			alt="{categoryDetails.name}'s icon"
		/>
		<h3>{categoryDetails.name}</h3>
		<ul class="ingredients">
			{#each categoryDetails.ingredients as ingredientName (ingredientName)}
				<li>
					<SelectableTag {ingredientName} />
				</li>
			{/each}
		</ul>
	</div>
</Card>

<style>
	.card-wrapper {
		padding: 0.75rem 0.5rem;
	}

	.card-wrapper img {
		margin-bottom: 0.5rem;
	}

	.card-wrapper h3 {
		margin-bottom: 0.875rem;

		color: var(--green);

		font-size: 1.125rem;
	}

	.ingredients {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem 1rem;
	}
</style>
