<div class="card-wrapper">
	<slot />
</div>

<style>
	.card-wrapper {
		width: var(--width, 300px);
		min-height: 100%;
		border-radius: 8px;

		background: var(--white);
		box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.1);

		overflow: hidden;
	}
</style>
