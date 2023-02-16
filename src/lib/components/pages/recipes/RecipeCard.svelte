<script lang="ts">
	import type { IRecipe } from '$lib/interfaces';

	import Card from '../../shared/Card.svelte';

	export let recipe: IRecipe;
</script>

<Card --width="280px">
	<img src="/images/recipes/{recipe.image}" alt="{recipe.name}'s picture" />

	<div class="recipe-info">
		<h3>{recipe.name}</h3>
	</div>
</Card>

<style>
	img {
		width: 100%;
		height: 150px;
	}

	.recipe-info {
		padding: 0.75rem 0.875rem;
	}

	.recipe-info > h3 {
		font-size: 1.125rem;
	}
</style>
