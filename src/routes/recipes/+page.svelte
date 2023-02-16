<script>
	import Recipe from '$components/pages/recipes/RecipeCard.svelte';
	import Title from '$components/shared/Title.svelte';
	import TagLink from '$components/shared/TagLink.svelte';

	import recipes from '$lib/json/recipes.json';
	import { myIngredientsList } from '$lib/stores/myIngredientsList';

	$: filteredRecipes = recipes.filter((recipe) =>
		recipe.ingredients.every((ingredientName) => $myIngredientsList.includes(ingredientName))
	);
</script>

<svelte:head>
	<title>Alura Cook | Recipes</title>
</svelte:head>

<main>
	<Title>Recipes</Title>

	<div class="info">
		<span>Results found: {filteredRecipes.length}</span>
		{#if filteredRecipes.length}
			<p>Check out the recipe options we found with the ingredients you have out there!</p>
		{:else}
			<p>No recipe found with the specified ingredients :(</p>
		{/if}
	</div>

	{#if filteredRecipes.length}
		<ul class="recipes">
			{#each filteredRecipes as recipe (recipe.name)}
				<li>
					<Recipe {recipe} />
				</li>
			{/each}
		</ul>
	{/if}

	<div class="edit-ingredients">
		<TagLink href="/">Edit list</TagLink>
	</div>
</main>

<style>
	main {
		text-align: center;
	}

	main .info > span {
		color: var(--green);
	}

	main .info > p {
		line-height: 2rem;
	}

	main .recipes {
		text-align: start;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}

	.edit-ingredients {
		display: flex;
		justify-content: center;
		margin: 4rem 0;
	}
</style>
