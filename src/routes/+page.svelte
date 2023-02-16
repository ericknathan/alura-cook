<script lang="ts">
	import { beforeNavigate } from '$app/navigation';

	import CategoryCard from '$components/pages/home/CategoryCard.svelte';
	import Title from '$components/shared/Title.svelte';
	import TagLink from '$components/shared/TagLink.svelte';

	import categories from '$lib/json/categories.json';

	import { myIngredientsList } from '$lib/stores/myIngredientsList';

	$: isIngredientsListEmpty = $myIngredientsList.length === 0;

	beforeNavigate((navigation) => {
		if (isIngredientsListEmpty && navigation.to?.url.pathname === '/recipes') {
			navigation.cancel();
		}
	});
</script>

<svelte:head>
	<title>Alura Cook</title>
</svelte:head>

<section class="ingredients-wrapper">
	<header class="info">
		<Title>Ingredients</Title>

		<p>Select below the ingredients you want to use in this meal:</p>
		<p>*Attention: we assume that you have salt, pepper and water at home.</p>
	</header>

	<ul class="categories-list">
		{#each categories as category (category.name)}
			<CategoryCard categoryDetails={category} />
		{/each}
	</ul>
</section>

<div class="search-recipes">
	<TagLink href="/recipes" disabled={isIngredientsListEmpty}>Search recipes</TagLink>
</div>

<style>
	.ingredients-wrapper {
		text-align: center;
	}

	.ingredients-wrapper .info {
		margin-bottom: 3.375rem;
	}

	.ingredients-wrapper .info > p {
		line-height: 2rem;
	}

	.categories-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}

	.search-recipes {
		display: flex;
		justify-content: center;
		margin: 4rem 0;
	}
</style>
