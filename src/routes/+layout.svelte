<script lang="ts">
	import '../app.css';

	import Header from '$components/global/Header.svelte';
	import Footer from '$components/global/Footer.svelte';
	import MyIngredientsList from '$components/global/MyIngredientsList.svelte';

	import { myIngredientsList } from '$lib/stores/myIngredientsList';
</script>

<Header />
<main class="content-wrapper">
	{#if $myIngredientsList.length}
		<MyIngredientsList />
	{/if}

	<div class="divider" />

	<slot />
</main>
<Footer />

<style>
	.divider {
		width: 40vw;
		height: 2px;
		background-color: var(--green);
		margin: 2rem auto;
	}
</style>
