<script lang="ts">
	export let as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
</script>

<svelte:element this={as} class="title tag-{as}">
	<slot />
</svelte:element>

<style>
	.title {
		color: var(--green);
		text-transform: uppercase;
	}

	.title.tag-h1 {
		margin-bottom: 1rem;

		font-size: 1.5rem;
		font-weight: 700;
		line-height: 2rem;
	}
</style>
