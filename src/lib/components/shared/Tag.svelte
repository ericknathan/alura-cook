<script lang="ts">
	export let isActive = false;
	export let size: 'md' | 'lg' = 'md';
	export let disabled = false;
</script>

<span class="size-{size}" class:disabled class:active={isActive}>
	<slot />
</span>

<style>
	span {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 3rem;
		border-radius: 8px;
		padding: 1rem;

		color: var(--accent);
		background-color: var(--gray);

		text-align: center;

		transition: all 0.2s ease-in-out;
	}

	span.active {
		background-color: var(--orange);
		color: var(--white);
	}

	span.size-lg {
		font-size: 1.125rem;
		padding: 1rem 1.5rem;
	}

	span.disabled {
		cursor: default;
		opacity: 0.9;
	}
</style>
